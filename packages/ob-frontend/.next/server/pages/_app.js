/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"@mui/material/CssBaseline\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/theme */ \"./src/theme.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-query/devtools */ \"react-query/devtools\");\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_query_devtools__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_query_hydration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-query/hydration */ \"react-query/hydration\");\n/* harmony import */ var react_query_hydration__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_query_hydration__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-seo */ \"next-seo\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _context_SnackbarContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/context/SnackbarContext */ \"./src/context/SnackbarContext.tsx\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n\n\n\nconst queryCache = new react_query__WEBPACK_IMPORTED_MODULE_5__.QueryCache();\nfunction MyApp({ Component , pageProps  }) {\n    const [snackbar, setSnackbar] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(null);\n    const [queryClient] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(()=>new react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClient({\n            queryCache,\n            defaultOptions: {\n                queries: {\n                    refetchOnWindowFocus: false,\n                    cacheTime: 1000 * 60 * 60 * 24\n                }\n            }\n        })\n    );\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClientProvider, {\n        client: queryClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n            theme: _theme__WEBPACK_IMPORTED_MODULE_3__.theme,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {\n                    fileName: \"/Users/dorianmazur/Documents/Obudynku-app/packages/ob-frontend/pages/_app.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query_hydration__WEBPACK_IMPORTED_MODULE_7__.Hydrate, {\n                    state: pageProps.dehydratedState,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_8__.DefaultSeo, {\n                            title: \"Obudynku\",\n                            description: \"Sprawd\\u017A opinie o budynku i mieszkaniach. Kiedy szukasz mieszkania dla siebie, musisz wzi\\u0105\\u0107 pod uwag\\u0119 informacje kt\\xf3re mo\\u017Cesz tutaj znale\\u017A\\u0107.\",\n                            canonical: \"https://www.obudynku.pl/\",\n                            openGraph: {\n                                url: \"https://www.obudynku.pl/\",\n                                title: \"Obudynku\",\n                                description: \"Sprawd\\u017A opinie o budynku i mieszkaniach. Kiedy szukasz mieszkania dla siebie, musisz wzi\\u0105\\u0107 pod uwag\\u0119 informacje kt\\xf3re mo\\u017Cesz tutaj znale\\u017A\\u0107.\",\n                                images: [\n                                    {\n                                        url: \"/og-image.png\",\n                                        width: 1086,\n                                        height: 440,\n                                        alt: \"Obudynku\"\n                                    }, \n                                ]\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/dorianmazur/Documents/Obudynku-app/packages/ob-frontend/pages/_app.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_SnackbarContext__WEBPACK_IMPORTED_MODULE_9__.SnackbarContext.Provider, {\n                            value: {\n                                showSnackbar: setSnackbar\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                                    ...pageProps\n                                }, void 0, false, {\n                                    fileName: \"/Users/dorianmazur/Documents/Obudynku-app/packages/ob-frontend/pages/_app.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Snackbar, {\n                                    open: !!snackbar,\n                                    autoHideDuration: 3000,\n                                    onClose: ()=>setSnackbar(null)\n                                    ,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Alert, {\n                                        onClose: ()=>setSnackbar(null)\n                                        ,\n                                        severity: snackbar?.severity,\n                                        sx: {\n                                            width: \"100%\"\n                                        },\n                                        children: snackbar?.message\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dorianmazur/Documents/Obudynku-app/packages/ob-frontend/pages/_app.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/dorianmazur/Documents/Obudynku-app/packages/ob-frontend/pages/_app.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dorianmazur/Documents/Obudynku-app/packages/ob-frontend/pages/_app.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dorianmazur/Documents/Obudynku-app/packages/ob-frontend/pages/_app.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query_devtools__WEBPACK_IMPORTED_MODULE_6__.ReactQueryDevtools, {\n                    initialIsOpen: false\n                }, void 0, false, {\n                    fileName: \"/Users/dorianmazur/Documents/Obudynku-app/packages/ob-frontend/pages/_app.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dorianmazur/Documents/Obudynku-app/packages/ob-frontend/pages/_app.tsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dorianmazur/Documents/Obudynku-app/packages/ob-frontend/pages/_app.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ29EO0FBQ0M7QUFDckI7QUFDUztBQUNrQztBQUNqQjtBQUNWO0FBQ1Y7QUFDc0I7QUFDQTtBQUM3QjtBQUUvQixNQUFNYSxVQUFVLEdBQUcsSUFBSVQsbURBQVUsRUFBRTtBQUVuQyxTQUFTVSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBRTtJQUNqRCxNQUFNLENBQUNDLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdmLHFEQUFjLENBR3BDLElBQUksQ0FBQztJQUNmLE1BQU0sQ0FBQ2lCLFdBQVcsQ0FBQyxHQUFHakIscURBQWMsQ0FDbEMsSUFDRSxJQUFJRSxvREFBVyxDQUFDO1lBQ2RRLFVBQVU7WUFDVlEsY0FBYyxFQUFFO2dCQUNkQyxPQUFPLEVBQUU7b0JBQ1BDLG9CQUFvQixFQUFFLEtBQUs7b0JBQzNCQyxTQUFTLEVBQUUsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtpQkFDL0I7YUFDRjtTQUNGLENBQUM7SUFBQSxDQUNMO0lBRUQscUJBQ0UsOERBQUNsQiw0REFBbUI7UUFBQ21CLE1BQU0sRUFBRUwsV0FBVztrQkFDdEMsNEVBQUNuQiwrREFBYTtZQUFDQyxLQUFLLEVBQUVBLHlDQUFLOzs4QkFDekIsOERBQUNGLGtFQUFXOzs7O3dCQUFHOzhCQUNmLDhEQUFDUSwwREFBTztvQkFBQ2tCLEtBQUssRUFBRVYsU0FBUyxDQUFDVyxlQUFlOztzQ0FDdkMsOERBQUNsQixnREFBVTs0QkFDVG1CLEtBQUssRUFBQyxVQUFVOzRCQUNoQkMsV0FBVyxFQUFDLG1MQUE2STs0QkFDakpDLFNBQUMsRUFBQywwQkFBMEI7NEJBQ3BDQyxTQUFTLEVBQUU7Z0NBQ1RDLEdBQUcsRUFBRSwwQkFBMEI7Z0NBQy9CSixLQUFLLEVBQUUsVUFBVTtnQ0FDakJDLFdBQVcsRUFDVCxtTEFBNkk7Z0NBQy9JSSxNQUFNLEVBQUU7b0NBQ047d0NBQ0VELEdBQUcsRUFBRSxlQUFlO3dDQUNwQkUsS0FBSyxFQUFFLElBQUk7d0NBQ1hDLE1BQU0sRUFBRSxHQUFHO3dDQUNYQyxHQUFHLEVBQUUsVUFBVTtxQ0FDaEI7aUNBQ0Y7NkJBQ0Y7Ozs7O2dDQUNEO3NDQUNGLDhEQUFDMUIsOEVBQXdCOzRCQUN2QjRCLEtBQUssRUFBRTtnQ0FDTEMsWUFBWSxFQUFFckIsV0FBVzs2QkFDMUI7OzhDQUVELDhEQUFDSCxTQUFTO29DQUFFLEdBQUdDLFNBQVM7Ozs7O3dDQUFJOzhDQUM1Qiw4REFBQ0osb0RBQVE7b0NBQ1A0QixJQUFJLEVBQUUsQ0FBQyxDQUFDdkIsUUFBUTtvQ0FDaEJ3QixnQkFBZ0IsRUFBRSxJQUFJO29DQUN0QkMsT0FBTyxFQUFFLElBQU14QixXQUFXLENBQUMsSUFBSSxDQUFDO29DQUFBOzhDQUVoQyw0RUFBQ1AsaURBQUs7d0NBQ0orQixPQUFPLEVBQUUsSUFBTXhCLFdBQVcsQ0FBQyxJQUFJLENBQUM7d0NBQUE7d0NBQ2hDeUIsUUFBUSxFQUFFMUIsUUFBUSxFQUFFMEIsUUFBUTt3Q0FDNUJDLEVBQUUsRUFBRTs0Q0FBRVYsS0FBSyxFQUFFLE1BQU07eUNBQUU7a0RBRXBCakIsUUFBUSxFQUFFNEIsT0FBTzs7Ozs7NENBQ1o7Ozs7O3dDQUNDOzs7Ozs7Z0NBQ2M7Ozs7Ozt3QkFDbkI7OEJBQ1YsOERBQUN0QyxvRUFBa0I7b0JBQUN1QyxhQUFhLEVBQUUsS0FBSzs7Ozs7d0JBQUk7Ozs7OztnQkFDOUI7Ozs7O1lBQ0ksQ0FDdEI7Q0FDSDtBQUVELGlFQUFlaEMsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2ItZnJvbnRlbmQvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICdAL3RoZW1lJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBRdWVyeUNhY2hlLCBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IFJlYWN0UXVlcnlEZXZ0b29scyB9IGZyb20gJ3JlYWN0LXF1ZXJ5L2RldnRvb2xzJztcbmltcG9ydCB7IEh5ZHJhdGUgfSBmcm9tICdyZWFjdC1xdWVyeS9oeWRyYXRpb24nO1xuaW1wb3J0IHsgRGVmYXVsdFNlbyB9IGZyb20gJ25leHQtc2VvJztcbmltcG9ydCB7IFNuYWNrYmFyQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dC9TbmFja2JhckNvbnRleHQnO1xuaW1wb3J0IHsgQWxlcnQsIEFsZXJ0Q29sb3IsIFNuYWNrYmFyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5cbmNvbnN0IHF1ZXJ5Q2FjaGUgPSBuZXcgUXVlcnlDYWNoZSgpO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIGNvbnN0IFtzbmFja2Jhciwgc2V0U25hY2tiYXJdID0gUmVhY3QudXNlU3RhdGU8e1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICBzZXZlcml0eTogQWxlcnRDb2xvcjtcbiAgfSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbcXVlcnlDbGllbnRdID0gUmVhY3QudXNlU3RhdGUoXG4gICAgKCkgPT5cbiAgICAgIG5ldyBRdWVyeUNsaWVudCh7XG4gICAgICAgIHF1ZXJ5Q2FjaGUsXG4gICAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgICAgcXVlcmllczoge1xuICAgICAgICAgICAgcmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlLFxuICAgICAgICAgICAgY2FjaGVUaW1lOiAxMDAwICogNjAgKiA2MCAqIDI0LCAvLyAyNCBob3Vyc1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgPEh5ZHJhdGUgc3RhdGU9e3BhZ2VQcm9wcy5kZWh5ZHJhdGVkU3RhdGV9PlxuICAgICAgICAgIDxEZWZhdWx0U2VvXG4gICAgICAgICAgICB0aXRsZT1cIk9idWR5bmt1XCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiU3ByYXdkxbogb3BpbmllIG8gYnVkeW5rdSBpIG1pZXN6a2FuaWFjaC4gS2llZHkgc3p1a2FzeiBtaWVzemthbmlhIGRsYSBzaWViaWUsIG11c2lzeiB3emnEhcSHIHBvZCB1d2FnxJkgaW5mb3JtYWNqZSBrdMOzcmUgbW/FvGVzeiB0dXRhaiB6bmFsZcW6xIcuXCJcbiAgICAgICAgICAgIGNhbm9uaWNhbD1cImh0dHBzOi8vd3d3Lm9idWR5bmt1LnBsL1wiXG4gICAgICAgICAgICBvcGVuR3JhcGg9e3tcbiAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cub2J1ZHlua3UucGwvJyxcbiAgICAgICAgICAgICAgdGl0bGU6ICdPYnVkeW5rdScsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICdTcHJhd2TFuiBvcGluaWUgbyBidWR5bmt1IGkgbWllc3prYW5pYWNoLiBLaWVkeSBzenVrYXN6IG1pZXN6a2FuaWEgZGxhIHNpZWJpZSwgbXVzaXN6IHd6acSFxIcgcG9kIHV3YWfEmSBpbmZvcm1hY2plIGt0w7NyZSBtb8W8ZXN6IHR1dGFqIHpuYWxlxbrEhy4nLFxuICAgICAgICAgICAgICBpbWFnZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB1cmw6ICcvb2ctaW1hZ2UucG5nJyxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDg2LFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NDAsXG4gICAgICAgICAgICAgICAgICBhbHQ6ICdPYnVkeW5rdScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8U25hY2tiYXJDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICBzaG93U25hY2tiYXI6IHNldFNuYWNrYmFyLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8U25hY2tiYXJcbiAgICAgICAgICAgICAgb3Blbj17ISFzbmFja2Jhcn1cbiAgICAgICAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17MzAwMH1cbiAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U25hY2tiYXIobnVsbCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxBbGVydFxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNuYWNrYmFyKG51bGwpfVxuICAgICAgICAgICAgICAgIHNldmVyaXR5PXtzbmFja2Jhcj8uc2V2ZXJpdHl9XG4gICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3NuYWNrYmFyPy5tZXNzYWdlfVxuICAgICAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICAgICAgPC9TbmFja2Jhcj5cbiAgICAgICAgICA8L1NuYWNrYmFyQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgPC9IeWRyYXRlPlxuICAgICAgICA8UmVhY3RRdWVyeURldnRvb2xzIGluaXRpYWxJc09wZW49e2ZhbHNlfSAvPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiQ3NzQmFzZWxpbmUiLCJUaGVtZVByb3ZpZGVyIiwidGhlbWUiLCJSZWFjdCIsIlF1ZXJ5Q2FjaGUiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJSZWFjdFF1ZXJ5RGV2dG9vbHMiLCJIeWRyYXRlIiwiRGVmYXVsdFNlbyIsIlNuYWNrYmFyQ29udGV4dCIsIkFsZXJ0IiwiU25hY2tiYXIiLCJxdWVyeUNhY2hlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzbmFja2JhciIsInNldFNuYWNrYmFyIiwidXNlU3RhdGUiLCJxdWVyeUNsaWVudCIsImRlZmF1bHRPcHRpb25zIiwicXVlcmllcyIsInJlZmV0Y2hPbldpbmRvd0ZvY3VzIiwiY2FjaGVUaW1lIiwiY2xpZW50Iiwic3RhdGUiLCJkZWh5ZHJhdGVkU3RhdGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY2Fub25pY2FsIiwib3BlbkdyYXBoIiwidXJsIiwiaW1hZ2VzIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJQcm92aWRlciIsInZhbHVlIiwic2hvd1NuYWNrYmFyIiwib3BlbiIsImF1dG9IaWRlRHVyYXRpb24iLCJvbkNsb3NlIiwic2V2ZXJpdHkiLCJzeCIsIm1lc3NhZ2UiLCJpbml0aWFsSXNPcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./src/context/SnackbarContext.tsx":
/*!*****************************************!*\
  !*** ./src/context/SnackbarContext.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SnackbarContext\": () => (/* binding */ SnackbarContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst SnackbarContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createContext({\n    showSnackbar: ()=>{}\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9TbmFja2JhckNvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUMwQjtBQU1uQixNQUFNQyxlQUFlLGlCQUFHRCwwREFBbUIsQ0FBc0I7SUFDdEVHLFlBQVksRUFBRSxJQUFNLEVBQUU7Q0FDdkIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2ItZnJvbnRlbmQvLi9zcmMvY29udGV4dC9TbmFja2JhckNvbnRleHQudHN4P2E0MTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWxlcnRDb2xvciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IHR5cGUgU25hY2tiYXJDb250ZXh0VHlwZSA9IHtcbiAgc2hvd1NuYWNrYmFyKHByb3BzOiB7IG1lc3NhZ2U6IHN0cmluZzsgc2V2ZXJpdHk6IEFsZXJ0Q29sb3IgfSk6IHZvaWQ7XG59O1xuXG5leHBvcnQgY29uc3QgU25hY2tiYXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxTbmFja2JhckNvbnRleHRUeXBlPih7XG4gIHNob3dTbmFja2JhcjogKCkgPT4ge30sXG59KTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNuYWNrYmFyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJzaG93U25hY2tiYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/SnackbarContext.tsx\n");

/***/ }),

/***/ "./src/theme.ts":
/*!**********************!*\
  !*** ./src/theme.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"theme\": () => (/* binding */ theme)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);\n\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    typography: {\n        fontFamily: [\n            \"Inter\",\n            \"sans-serif\"\n        ].join(\",\")\n    },\n    palette: {\n        primary: {\n            main: \"#00D066\",\n            light: \"#CCF6E0\",\n            dark: \"#00A652\",\n            contrastText: \"rgba(255,255,255,0.87)\"\n        },\n        secondary: {\n            main: \"#FFBD00\",\n            light: \"#ffbd00\",\n            dark: \"#ff4e00\"\n        }\n    },\n    components: {\n        MuiCard: {\n            styleOverrides: {\n                root: {\n                    border: \"1px solid #E4E6E899\",\n                    borderRadius: 16\n                }\n            }\n        },\n        MuiButton: {\n            defaultProps: {\n                focusRipple: false,\n                disableRipple: true\n            },\n            styleOverrides: {\n                root: {\n                    textTransform: \"none\",\n                    boxShadow: \"none\",\n                    fontWeight: \"600\",\n                    borderRadius: \"23px\",\n                    \"&:hover\": {\n                        boxShadow: \"none\"\n                    }\n                },\n                sizeLarge: {\n                    fontSize: \"0.875rem\",\n                    height: 46\n                },\n                text: {\n                    color: \"#8083A3\",\n                    \"&:hover\": {\n                        color: \"#000000\"\n                    }\n                }\n            }\n        },\n        MuiFormLabel: {\n            styleOverrides: {\n                root: {\n                    fontSize: \"0.85rem\",\n                    lineHeight: \"1.8em\",\n                    color: \"#000000\"\n                }\n            }\n        },\n        MuiFilledInput: {\n            styleOverrides: {\n                root: {\n                    background: \"#ffffff !important\",\n                    borderRadius: 6,\n                    \"&:hover\": {\n                        background: \"#ffffff\"\n                    },\n                    \"&:focus\": {\n                        background: \"#ffffff\"\n                    },\n                    \"&:active\": {\n                        background: \"#ffffff\"\n                    },\n                    \"&:after\": {\n                        borderBottom: \"none !important\"\n                    },\n                    \"&:before\": {\n                        borderBottom: \"none !important\"\n                    }\n                }\n            }\n        },\n        MuiTextField: {\n            styleOverrides: {\n                root: {\n                    \"&:placeholder\": {\n                        color: \"red\"\n                    }\n                }\n            }\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1EO0FBRTVDLE1BQU1DLEtBQUssR0FBR0QsaUVBQVcsQ0FBQztJQUMvQkUsVUFBVSxFQUFFO1FBQ1ZDLFVBQVUsRUFBRTtZQUFDLE9BQU87WUFBRSxZQUFZO1NBQUMsQ0FBQ0MsSUFBSSxDQUFDLEdBQUcsQ0FBQztLQUM5QztJQUNEQyxPQUFPLEVBQUU7UUFDUEMsT0FBTyxFQUFFO1lBQ1BDLElBQUksRUFBRSxTQUFTO1lBQ2ZDLEtBQUssRUFBRSxTQUFTO1lBQ2hCQyxJQUFJLEVBQUUsU0FBUztZQUNmQyxZQUFZLEVBQUUsd0JBQXdCO1NBQ3ZDO1FBQ0RDLFNBQVMsRUFBRTtZQUNUSixJQUFJLEVBQUUsU0FBUztZQUNmQyxLQUFLLEVBQUUsU0FBUztZQUNoQkMsSUFBSSxFQUFFLFNBQVM7U0FDaEI7S0FDRjtJQUNERyxVQUFVLEVBQUU7UUFDVkMsT0FBTyxFQUFFO1lBQ1BDLGNBQWMsRUFBRTtnQkFDZEMsSUFBSSxFQUFFO29CQUNKQyxNQUFNLEVBQUUscUJBQXFCO29CQUM3QkMsWUFBWSxFQUFFLEVBQUU7aUJBQ2pCO2FBQ0Y7U0FDRjtRQUNEQyxTQUFTLEVBQUU7WUFDVEMsWUFBWSxFQUFFO2dCQUNaQyxXQUFXLEVBQUUsS0FBSztnQkFDbEJDLGFBQWEsRUFBRSxJQUFJO2FBQ3BCO1lBQ0RQLGNBQWMsRUFBRTtnQkFDZEMsSUFBSSxFQUFFO29CQUNKTyxhQUFhLEVBQUUsTUFBTTtvQkFDckJDLFNBQVMsRUFBRSxNQUFNO29CQUNqQkMsVUFBVSxFQUFFLEtBQUs7b0JBQ2pCUCxZQUFZLEVBQUUsTUFBTTtvQkFDcEIsU0FBUyxFQUFFO3dCQUNUTSxTQUFTLEVBQUUsTUFBTTtxQkFDbEI7aUJBQ0Y7Z0JBQ0RFLFNBQVMsRUFBRTtvQkFDVEMsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCQyxNQUFNLEVBQUUsRUFBRTtpQkFDWDtnQkFDREMsSUFBSSxFQUFFO29CQUNKQyxLQUFLLEVBQUUsU0FBUztvQkFDaEIsU0FBUyxFQUFFO3dCQUNUQSxLQUFLLEVBQUUsU0FBUztxQkFDakI7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0RDLFlBQVksRUFBRTtZQUNaaEIsY0FBYyxFQUFFO2dCQUNkQyxJQUFJLEVBQUU7b0JBQ0pXLFFBQVEsRUFBRSxTQUFTO29CQUNuQkssVUFBVSxFQUFFLE9BQU87b0JBQ25CRixLQUFLLEVBQUUsU0FBUztpQkFDakI7YUFDRjtTQUNGO1FBQ0RHLGNBQWMsRUFBRTtZQUNkbEIsY0FBYyxFQUFFO2dCQUNkQyxJQUFJLEVBQUU7b0JBQ0prQixVQUFVLEVBQUUsb0JBQW9CO29CQUNoQ2hCLFlBQVksRUFBRSxDQUFDO29CQUNmLFNBQVMsRUFBRTt3QkFDVGdCLFVBQVUsRUFBRSxTQUFTO3FCQUN0QjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1RBLFVBQVUsRUFBRSxTQUFTO3FCQUN0QjtvQkFDRCxVQUFVLEVBQUU7d0JBQ1ZBLFVBQVUsRUFBRSxTQUFTO3FCQUN0QjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1RDLFlBQVksRUFBRSxpQkFBaUI7cUJBQ2hDO29CQUNELFVBQVUsRUFBRTt3QkFDVkEsWUFBWSxFQUFFLGlCQUFpQjtxQkFDaEM7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0RDLFlBQVksRUFBRTtZQUNackIsY0FBYyxFQUFFO2dCQUNkQyxJQUFJLEVBQUU7b0JBQ0osZUFBZSxFQUFFO3dCQUNmYyxLQUFLLEVBQUUsS0FBSztxQkFDYjtpQkFDRjthQUNGO1NBQ0Y7S0FDRjtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29iLWZyb250ZW5kLy4vc3JjL3RoZW1lLnRzP2RjOWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5cbmV4cG9ydCBjb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcbiAgdHlwb2dyYXBoeToge1xuICAgIGZvbnRGYW1pbHk6IFsnSW50ZXInLCAnc2Fucy1zZXJpZiddLmpvaW4oJywnKSxcbiAgfSxcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46ICcjMDBEMDY2JyxcbiAgICAgIGxpZ2h0OiAnI0NDRjZFMCcsXG4gICAgICBkYXJrOiAnIzAwQTY1MicsXG4gICAgICBjb250cmFzdFRleHQ6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuODcpJyxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogJyNGRkJEMDAnLFxuICAgICAgbGlnaHQ6ICcjZmZiZDAwJyxcbiAgICAgIGRhcms6ICcjZmY0ZTAwJyxcbiAgICB9LFxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgTXVpQ2FyZDoge1xuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjRTRFNkU4OTknLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogMTYsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgTXVpQnV0dG9uOiB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgZm9jdXNSaXBwbGU6IGZhbHNlLFxuICAgICAgICBkaXNhYmxlUmlwcGxlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXG4gICAgICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICAgICAgZm9udFdlaWdodDogJzYwMCcsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjNweCcsXG4gICAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzaXplTGFyZ2U6IHtcbiAgICAgICAgICBmb250U2l6ZTogJzAuODc1cmVtJyxcbiAgICAgICAgICBoZWlnaHQ6IDQ2LFxuICAgICAgICB9LFxuICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgY29sb3I6ICcjODA4M0EzJyxcbiAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzAwMDAwMCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlGb3JtTGFiZWw6IHtcbiAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICBmb250U2l6ZTogJzAuODVyZW0nLFxuICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxLjhlbScsXG4gICAgICAgICAgY29sb3I6ICcjMDAwMDAwJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlGaWxsZWRJbnB1dDoge1xuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICcjZmZmZmZmICFpbXBvcnRhbnQnLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogNixcbiAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjZmZmZmZmJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJyNmZmZmZmYnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJyY6YWN0aXZlJzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJyNmZmZmZmYnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgICBib3JkZXJCb3R0b206ICdub25lICFpbXBvcnRhbnQnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJyY6YmVmb3JlJzoge1xuICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnbm9uZSAhaW1wb3J0YW50JyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aVRleHRGaWVsZDoge1xuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgICcmOnBsYWNlaG9sZGVyJzoge1xuICAgICAgICAgICAgY29sb3I6ICdyZWQnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVUaGVtZSIsInRoZW1lIiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJqb2luIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwibGlnaHQiLCJkYXJrIiwiY29udHJhc3RUZXh0Iiwic2Vjb25kYXJ5IiwiY29tcG9uZW50cyIsIk11aUNhcmQiLCJzdHlsZU92ZXJyaWRlcyIsInJvb3QiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJNdWlCdXR0b24iLCJkZWZhdWx0UHJvcHMiLCJmb2N1c1JpcHBsZSIsImRpc2FibGVSaXBwbGUiLCJ0ZXh0VHJhbnNmb3JtIiwiYm94U2hhZG93IiwiZm9udFdlaWdodCIsInNpemVMYXJnZSIsImZvbnRTaXplIiwiaGVpZ2h0IiwidGV4dCIsImNvbG9yIiwiTXVpRm9ybUxhYmVsIiwibGluZUhlaWdodCIsIk11aUZpbGxlZElucHV0IiwiYmFja2dyb3VuZCIsImJvcmRlckJvdHRvbSIsIk11aVRleHRGaWVsZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/theme.ts\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ "@mui/material/CssBaseline":
/*!********************************************!*\
  !*** external "@mui/material/CssBaseline" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ "react-query/devtools":
/*!***************************************!*\
  !*** external "react-query/devtools" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query/devtools");

/***/ }),

/***/ "react-query/hydration":
/*!****************************************!*\
  !*** external "react-query/hydration" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query/hydration");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();