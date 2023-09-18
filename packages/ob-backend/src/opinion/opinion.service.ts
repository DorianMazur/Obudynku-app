import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BuildingService } from '../building/building.service';
import { Repository } from 'typeorm';
import { AddNewOpinionDTO, EditOpinionDTO } from './opinion.dto';
import { OpinionEntity } from './opinion.entity';

@Injectable()
export class OpinionService {
  constructor(
    @InjectRepository(OpinionEntity)
    private opinionRepository: Repository<OpinionEntity>,
    private buildingService: BuildingService,
  ) {}

  async getUserOpinions(userID: string) {
    const user = await this.opinionRepository.find({
      where: { user_id: userID },
      relations: ['building'],
    });
    return user;
  }

  async getUserOpinion(userID: string, opinionID: string) {
    const user = await this.opinionRepository.findOne({
      where: { user_id: userID, id: opinionID },
      relations: ['building'],
    });
    return user;
  }

  async getAvgRatesByCity() {
    // SELECT AVG(construction), `building`.`city` FROM opinion LEFT JOIN `building` `building` ON `building`.`id`=`opinion`.`buildingId` GROUP BY `building`.`city`
    const opinions = await this.opinionRepository
      .createQueryBuilder('opinion')
      .addSelect(['building.city'])
      .leftJoin('opinion.building', 'building')
      .where('opinion.status = :status', { status: 'APPROVED' })
      .groupBy()
      .orderBy('opinion.created_date', 'DESC')
      .skip(0)
      .take(5)
      .getMany();
    return opinions;
  }

  async getLatestOpinions() {
    // SELECT AVG(construction), `building`.`city` FROM opinion LEFT JOIN `building` `building` ON `building`.`id`=`opinion`.`buildingId` GROUP BY `building`.`city`
    const opinions = await this.opinionRepository
      .createQueryBuilder('opinion')
      .addSelect([
        'building.id',
        'building.city',
        'building.address',
        'building.lat',
        'building.lon',
      ])
      .leftJoin('opinion.building', 'building')
      .where('opinion.status = :status', { status: 'APPROVED' })
      .orderBy('opinion.created_date', 'DESC')
      .skip(0)
      .take(5)
      .getMany();
    return opinions;
  }

  async getOpinionStatistics() {
    const statistics = await this.opinionRepository
      .createQueryBuilder('opinion')
      .select([
        'AVG(opinion.acustic) as acustic',
        'AVG(opinion.construction) as construction',
        'AVG(opinion.localization) as localization',
        'AVG(opinion.safety) as safety',
        'COUNT(opinion.acustic) as count',
        'building.city as city',
      ])
      .leftJoin('opinion.building', 'building')
      .groupBy('building.city')
      .getRawMany();
    return statistics;
  }

  async deleteOpinion(id: string, user_id: string) {
    const opinion = await this.opinionRepository.findOne({
      where: { id, user_id },
      relations: ['building'],
    });

    if (opinion) {
      await this.opinionRepository.delete({ id: opinion.id });
    }
  }

  async addNewOpinion(data: AddNewOpinionDTO, userID: string) {
    let building = await this.buildingService.checkIfExist(
      data.city,
      data.address,
    );
    if (!building) {
      building = await this.buildingService.addNewBuilding(
        data.city,
        data.address,
        data.lat,
        data.lon,
      );
    }
    const newOpinion = await this.opinionRepository.create({
      building,
      flat_number: data.flat_number,
      construction: data.rates.construction,
      localization: data.rates.localization,
      safety: data.rates.safety,
      acustic: data.rates.acustic,
      opinions: data.opinions,
      status: 'PENDING',
      user_id: userID,
      advice: data.advice,
      year: data.year,
    });
    await this.opinionRepository.save(newOpinion);
    return newOpinion;
  }

  async editOpinion(data: EditOpinionDTO, userID: string, opinionID: string) {
    const opinion = await this.opinionRepository.findOne({ id: opinionID });
    if (!opinion) {
      throw new HttpException(
        'Nie znaleziono takiej opinii',
        HttpStatus.NOT_FOUND,
      );
    }
    if (opinion.user_id !== userID) {
      throw new HttpException(
        'Nie znaleziono takiej opinii',
        HttpStatus.FORBIDDEN,
      );
    }
    const newOpinion = await this.opinionRepository.update(
      { id: opinionID },
      {
        construction: data.rates.construction,
        localization: data.rates.localization,
        safety: data.rates.safety,
        acustic: data.rates.acustic,
        opinions: data.opinions,
        status: 'PENDING',
        advice: data.advice,
        year: data.year,
      },
    );
    return newOpinion;
  }
}
