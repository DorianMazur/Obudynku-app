import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BuildingEntity } from './building.entity';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class BuildingService {
  constructor(
    @InjectRepository(BuildingEntity)
    private buildingRepository: Repository<BuildingEntity>,
    private httpService: HttpService,
  ) {}

  async getBuilding(id: string) {
    const building = await this.buildingRepository
      .createQueryBuilder('building')
      .where('building.id = :id', { id })
      .leftJoinAndSelect(
        'building.opinions',
        'opinion',
        'opinion.status = :status',
        { status: 'APPROVED' },
      )
      .getOne();
    if (!building.opinions.length) return building;
    /*if (!building.image) {
      const writeStream = createWriteStream(`./${building.id}.jpg`);
      const response = await this.httpService.axiosRef({
        url: ``,
        method: 'GET',
        responseType: 'stream',
      });
      response.data.pipe(writeStream);
      await new Promise((resolve) =>
        writeStream.on('finish', async () => resolve('finish')),
      );

      const s3 = new S3();
      const readStream = readFileSync(`./${building.id}.jpg`);
      const uploadResult = await s3
        .upload({
          Bucket: 'ob-backend',
          Body: readStream,
          ACL: 'public-read',
          Key: `buildings/${building.id}.jpg`,
        })
        .promise();
      building.image = uploadResult.Location;
      this.buildingRepository.save(building);
      unlinkSync(`./${building.id}.jpg`);
    }*/
    return building;
  }

  async searchBuildings(city: string, search?: string) {
    const buildings = await this.buildingRepository
      .createQueryBuilder('building')
      .addSelect([
        'opinion.safety',
        'opinion.construction',
        'opinion.acustic',
        'opinion.localization',
        'opinion.internet',
      ])
      .leftJoin('building.opinions', 'opinion')
      .where(
        `building.city = :city AND ${
          search ? 'building.address like :search' : 'TRUE'
        }`,
        {
          city,
          search: `%${search}%`,
        },
      )
      .andWhere('opinion.status = :status', { status: 'APPROVED' })
      .limit(20)
      .getMany();

    return buildings;
  }

  async checkIfExist(city: string, address: string) {
    return this.buildingRepository.findOne({ city, address });
  }

  async addNewBuilding(
    city: string,
    address: string,
    lat: number,
    lon: number,
  ) {
    const newBuilding = await this.buildingRepository.create({
      city,
      address,
      lat,
      lon,
    });
    await this.buildingRepository.save(newBuilding);
    return newBuilding;
  }
}
