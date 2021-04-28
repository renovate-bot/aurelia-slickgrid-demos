(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{O9xy:function(t,e,i){"use strict";(function(t){i.d(e,"a",(function(){return a}));var r=i("uaPe"),s=i("fj9p");const o={delimiter:s.A.comma,filename:"export",format:s.N.csv,useUtf8WithBom:!0};class a{constructor(){this._delimiter=",",this._exportQuoteWrapper="",this._fileFormat=s.N.csv,this._lineCarriageReturn="\n",this._columnHeaders=[],this._hasGroupedItems=!1,this.className="TextExportService"}get _datasetIdPropName(){return this._gridOptions&&this._gridOptions.datasetIdPropertyName||"id"}get _dataView(){var t;return(null===(t=this._grid)||void 0===t?void 0:t.getData)&&this._grid.getData()}get _gridOptions(){var t;return(null===(t=this._grid)||void 0===t?void 0:t.getOptions)?this._grid.getOptions():{}}init(t,e){var i;if(this._grid=t,this._pubSubService=e.get("PubSubService"),this._locales=this._gridOptions&&this._gridOptions.locales||s.u.locales,this._translaterService=null===(i=this._gridOptions)||void 0===i?void 0:i.translater,this._gridOptions.enableTranslate&&(!this._translaterService||!this._translaterService.translate))throw new Error('[Slickgrid-Universal] requires a Translate Service to be passed in the "translater" Grid Options when "enableTranslate" is enabled. (example: this.gridOptions = { enableTranslate: true, translater: this.translaterService })')}exportToFile(e){if(!this._grid||!this._dataView||!this._pubSubService)throw new Error('[Slickgrid-Universal] it seems that the SlickGrid & DataView objects and/or PubSubService are not initialized did you forget to enable the grid option flag "enableTextExport"?');return new t(t=>{var i;null===(i=this._pubSubService)||void 0===i||i.publish("onBeforeExportToTextFile",!0),this._exportOptions=Object(s.tc)({...o,...this._gridOptions.exportOptions,...this._gridOptions.textExportOptions,...e}),this._delimiter=this._exportOptions.delimiterOverride||this._exportOptions.delimiter||"",this._fileFormat=this._exportOptions.format||s.N.csv;const r=this.getDataOutput();setTimeout(()=>{var e;const i={filename:`${this._exportOptions.filename}.${this._fileFormat}`,format:this._fileFormat||s.N.csv,mimeType:this._exportOptions.mimeType||"text/plain",useUtf8WithBom:!this._exportOptions||!this._exportOptions.hasOwnProperty("useUtf8WithBom")||this._exportOptions.useUtf8WithBom};this.startDownloadFile({...i,content:r}),null===(e=this._pubSubService)||void 0===e||e.publish("onAfterExportToTextFile",i),t(!0)},0)})}startDownloadFile(t){const e=Object(s.ad)(t.content);let i;i=t.format===s.N.csv?new r.TextEncoder("utf-8").encode(e):e;const o=new Blob([t.useUtf8WithBom?"\ufeff":"",i],{type:t.mimeType});if("function"==typeof navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(o,t.filename);else{const e=document.createElement("a"),i=URL.createObjectURL(o);e.textContent="download",e.href=i,e.setAttribute("download",t.filename),e.style.visibility="hidden",document.body.appendChild(e),e.click(),document.body.removeChild(e)}}getDataOutput(){const t=this._grid.getColumns()||[];let e=this._exportOptions.groupingColumnHeaderTitle;!e&&this._gridOptions.enableTranslate&&this._translaterService&&this._translaterService.translate&&this._translaterService.getCurrentLanguage&&this._translaterService.getCurrentLanguage()?e=this._translaterService.translate(Object(s.Vc)(this._gridOptions)+"GROUP_BY"):e||(e=this._locales&&this._locales.TEXT_GROUP_BY),this._exportQuoteWrapper=this._fileFormat===s.N.csv?'"':"";let i="";const r=this._dataView.getGrouping();if(r&&Array.isArray(r)&&r.length>0?(this._hasGroupedItems=!0,i+=this._fileFormat===s.N.csv?`"${e}"${this._delimiter}`:`${e}${this._delimiter}`):this._hasGroupedItems=!1,this._gridOptions.createPreHeaderPanel&&this._gridOptions.showPreHeaderPanel&&!this._gridOptions.enableDraggableGrouping&&(this._groupedColumnHeaders=this.getColumnGroupedHeaderTitles(t)||[],this._groupedColumnHeaders&&Array.isArray(this._groupedColumnHeaders)&&this._groupedColumnHeaders.length>0)){i+=this._groupedColumnHeaders.map(t=>`${this._exportQuoteWrapper}${t.title}${this._exportQuoteWrapper}`).join(this._delimiter)+this._lineCarriageReturn}if(this._columnHeaders=this.getColumnHeaders(t)||[],this._columnHeaders&&Array.isArray(this._columnHeaders)&&this._columnHeaders.length>0){i+=this._columnHeaders.map(t=>`${this._exportQuoteWrapper}${t.title}${this._exportQuoteWrapper}`).join(this._delimiter)+this._lineCarriageReturn}return i+=this.getAllGridRowData(t,this._lineCarriageReturn),i}getAllGridRowData(t,e){const i=[],r=this._dataView.getLength();for(let e=0;e<r;e++){const r=this._dataView.getItem(e);r&&(null!==r[this._datasetIdPropName]&&void 0!==r[this._datasetIdPropName]?i.push(this.readRegularRowData(t,e,r)):this._hasGroupedItems&&void 0===r.__groupTotals?i.push(this.readGroupedTitleRow(r)):r.__groupTotals&&i.push(this.readGroupedTotalRow(t,r)))}return i.join(e)}getColumnGroupedHeaderTitles(t){const e=[];return t&&Array.isArray(t)&&t.forEach(t=>{let i="";i=t.columnGroupKey&&this._gridOptions.enableTranslate&&this._translaterService&&this._translaterService.translate&&this._translaterService.getCurrentLanguage&&this._translaterService.getCurrentLanguage()?this._translaterService.translate(t.columnGroupKey):t.columnGroup||"";const r=t.excludeFromExport||!1;(void 0===t.width||t.width>0)&&!r&&e.push({key:t.field||t.id,title:i||""})}),e}getColumnHeaders(t){const e=[];return t&&Array.isArray(t)&&t.forEach(t=>{let i="";i=(t.nameKey||t.nameKey)&&this._gridOptions.enableTranslate&&this._translaterService&&this._translaterService.translate&&this._translaterService.getCurrentLanguage&&this._translaterService.getCurrentLanguage()?this._translaterService.translate(t.nameKey||t.nameKey):t.name||Object(s.Pd)(t.field);const r=t.excludeFromExport||!1;(void 0===t.width||t.width>0)&&!r&&e.push({key:t.field||t.id,title:i||""})}),e}readRegularRowData(t,e,i){var r;let o=0;const a=[],n=this._exportQuoteWrapper;let l=1;const u=this._dataView.getItemMetadata(e);for(let d=0,h=t.length;d<h;d++){const h=t[d];if(h.excludeFromExport)continue;if(this._hasGroupedItems&&0===o){const t=this._fileFormat===s.N.csv?'""':"";a.push(t)}let c;if(null==u?void 0:u.columns){const t=null==u?void 0:u.columns,e=t[h.id]||t[d];l>1||"*"===l&&d>0||(l=null!==(r=null==e?void 0:e.colspan)&&void 0!==r?r:1),"*"!==l&&h.id in t&&(c=h.id)}if("*"===l&&d>0||l>1&&h.id!==c)a.push(""),l>1&&l--;else{let t=Object(s.Ic)(e,d,i,h,this._grid,this._exportOptions);(h.sanitizeDataExport||this._exportOptions.sanitizeDataExport)&&(t=Object(s.Bd)(t)),this._fileFormat===s.N.csv&&t&&(t=t.toString().replace(/"/gi,'""'));const r=(null==h?void 0:h.exportCsvForceToKeepAsString)?"=":"";a.push(r+n+t+n)}o++}return a.join(this._delimiter)}readGroupedTitleRow(t){let e=Object(s.Bd)(t.title);const i=this._exportQuoteWrapper;return e=Object(s.Vb)(5*t.level)+e,this._fileFormat===s.N.csv&&(e=e.toString().replace(/"/gi,'""')),i+e+i}readGroupedTotalRow(t,e){const i=this._exportOptions.delimiter,r=this._exportOptions.format,o=this._exportOptions.groupingAggregatorRowText||"",a=this._exportQuoteWrapper,n=[`${a}${o}${a}`];return t.forEach(t=>{let i="";const o=t.excludeFromExport||!1;t.groupTotalsFormatter&&(i=t.groupTotalsFormatter(e,t,this._grid)),(t.sanitizeDataExport||this._exportOptions.sanitizeDataExport)&&(i=Object(s.Bd)(i)),r===s.N.csv&&(i=i.toString().replace(/"/gi,'""')),(void 0===t.width||t.width>0)&&!o&&n.push(a+i+a)}),n.join(i)}}}).call(this,i("CW7D"))},UUUo:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var r=i("fj9p");class s{constructor(){this._filterCount=0,this._odataOptions={filterQueue:[],orderBy:""},this._defaultSortBy="",this._columnFilters={}}buildQuery(){if(!this._odataOptions)throw new Error('Odata Service requires certain options like "top" for it to work');this._odataOptions.filterQueue=[];const t=[];if(this._odataOptions&&!0===this._odataOptions.enableCount){const e=this._odataOptions.version&&this._odataOptions.version>=4?"$count=true":"$inlinecount=allpages";t.push(e)}if(this._odataOptions.top&&t.push("$top="+this._odataOptions.top),this._odataOptions.skip&&t.push("$skip="+this._odataOptions.skip),this._odataOptions.orderBy){let e="";e=Array.isArray(this._odataOptions.orderBy)?this._odataOptions.orderBy.join(","):this._odataOptions.orderBy,t.push("$orderby="+e)}if(this._odataOptions.filterBy||this._odataOptions.filter){const t=this._odataOptions.filter||this._odataOptions.filterBy;if(t){this._filterCount=1,this._odataOptions.filterQueue=[];let e=t;Array.isArray(t)&&(this._filterCount=t.length,e=t.join(` ${this._odataOptions.filterBySeparator||"and"} `)),"string"==typeof e&&("("!==e[0]||")"!==e.slice(-1)?this.addToFilterQueueWhenNotExists(`(${e})`):this.addToFilterQueueWhenNotExists(e))}}if(this._odataOptions.filterQueue.length>0){const e=this._odataOptions.filterQueue.join(` ${this._odataOptions.filterBySeparator||"and"} `);this._odataOptions.filter=e,t.push("$filter="+e)}return t.join("&")}getFilterCount(){return this._filterCount}get columnFilters(){return this._columnFilters}get options(){return this._odataOptions}set options(t){this._odataOptions=t}removeColumnFilter(t){this._columnFilters&&this._columnFilters.hasOwnProperty(t)&&delete this._columnFilters[t]}saveColumnFilter(t,e,i){this._columnFilters[t]={search:i,value:e}}updateOptions(t){for(const e of Object.keys(t))if(t.hasOwnProperty(e)&&(this._odataOptions[e]=t[e]),"orderBy"===e||"sortBy"===e){let i=t[e];this._odataOptions.caseType===r.h.pascalCase&&(Array.isArray(i)?i.forEach((t,e,i)=>{i[e]=Object(r.Pd)(t)}):i=Object(r.Pd)(t[e])),this._odataOptions.orderBy=i,this._defaultSortBy=i}}addToFilterQueueWhenNotExists(t){this._odataOptions.filterQueue&&-1===this._odataOptions.filterQueue.indexOf(t)&&this._odataOptions.filterQueue.push(t)}}class o{constructor(){this._currentFilters=[],this._currentPagination=null,this._currentSorters=[],this._columnDefinitions=[],this.defaultOptions={top:25,orderBy:"",caseType:r.h.pascalCase},this._odataService=new s}get columnDefinitions(){return this._columnDefinitions}get odataService(){return this._odataService}get _gridOptions(){var t;return(null===(t=this._grid)||void 0===t?void 0:t.getOptions)?this._grid.getOptions():{}}init(t,e,i){this._grid=i;const r={...this.defaultOptions,...t};if(this._gridOptions&&!this._gridOptions.enablePagination)this._odataService.options={...r,top:void 0},this._currentPagination=null;else{const t=e&&e.pageSize?e.pageSize:this.defaultOptions.top;this._odataService.options={...r,top:t},this._currentPagination={pageNumber:1,pageSize:this._odataService.options.top||this.defaultOptions.top||20}}this.options=this._odataService.options,this.pagination=e,(null==i?void 0:i.getColumns)&&(this._columnDefinitions=i.getColumns()||[],this._columnDefinitions=this._columnDefinitions.filter(t=>!t.excludeFromQuery))}buildQuery(){return this._odataService.buildQuery()}clearFilters(){this._currentFilters=[],this.updateFilters([])}clearSorters(){this._currentSorters=[],this.updateSorters([])}updateOptions(t){this.options={...this.options,...t},this._odataService.options=this.options}removeColumnFilter(t){this._odataService.removeColumnFilter(t)}getCurrentFilters(){return this._currentFilters}getCurrentPagination(){return this._currentPagination}getCurrentSorters(){return this._currentSorters}mapOdataOperator(t){let e="";switch(t){case"<":e="lt";break;case"<=":e="le";break;case">":e="gt";break;case">=":e="ge";break;case"<>":case"!=":e="ne";break;case"=":case"==":default:e="eq"}return e}resetPaginationOptions(){this._odataService.updateOptions({skip:0})}saveColumnFilter(t,e,i){this._odataService.saveColumnFilter(t,e,i)}processOnFilterChanged(t,e){if(void 0===this._gridOptions.backendServiceApi)throw new Error('Something went wrong in the GridOdataService, "backendServiceApi" is not initialized');if(this._currentFilters=this.castFilterToColumnFilters(e.columnFilters),!e||!e.grid)throw new Error('Something went wrong when trying create the GridOdataService, it seems that "args" is not populated correctly');return this.updateFilters(e.columnFilters),this.resetPaginationOptions(),this._odataService.buildQuery()}processOnPaginationChanged(t,e){const i=+(e.pageSize||(this.pagination?this.pagination.pageSize:20));return this.updatePagination(e.newPage,i),this._odataService.buildQuery()}processOnSortChanged(t,e){const i=e.multiColumnSort?e.sortCols:new Array({columnId:e.sortCol.id,sortCol:e.sortCol,sortAsc:e.sortAsc});return this.updateSorters(i),this._odataService.buildQuery()}updateFilters(t,e){var i,s,o,a;let n="";const l=[],u=null!==(o=null===(s=null===(i=this._odataService)||void 0===i?void 0:i.options)||void 0===s?void 0:s.version)&&void 0!==o?o:2;e&&(this._currentFilters=this.castFilterToColumnFilters(t));for(const i in t)if(t.hasOwnProperty(i)){const s=t[i];let o;if(o=e&&Array.isArray(this._columnDefinitions)?this._columnDefinitions.find(t=>t.id===s.columnId):s.columnDef,!o)throw new Error("[GridOData Service]: Something went wrong in trying to get the column definition of the specified filter (or preset filters). Did you make a typo on the filter columnId?");let d=(null===(a=o.filter)||void 0===a?void 0:a.queryField)||o.queryFieldFilter||o.queryField||o.field||o.name||"";const h=o.type||r.M.string;let c=(s&&s.searchTerms?[...s.searchTerms]:null)||[],p=Array.isArray(c)&&1===c.length?c[0]:"";if(void 0===p&&(p=""),!d)throw new Error('GridOData filter could not find the field name to query the search, your column definition must include a valid "field" or "name" (optionally you can also use the "queryfield").');p=null==p?"":""+p;const _=p.match(/^([<>!=\*]{0,2})(.*[^<>!=\*])([\*]?)$/);let g=s.operator||(_?_[1]:""),m=_?_[2]:"";const f=_?_[3]:"*z"===g||g===r.ub.endsWith?"*":"",O=s.bypassBackendQuery||!1;if(d&&""===m&&c.length<=1){this.removeColumnFilter(d);continue}if(Array.isArray(c)&&1===c.length&&"string"==typeof c[0]&&c[0].indexOf("..")>=0&&(g||(g=this._gridOptions.defaultFilterRangeOperator),c=c[0].split("..",2),""===c[0]?(g=g===r.ub.rangeInclusive?"<=":g===r.ub.rangeExclusive?"<":g,c=c.slice(1),m=c[0]):""===c[1]&&(g=g===r.ub.rangeInclusive?">=":g===r.ub.rangeExclusive?">":g,c=c.slice(0,1),m=c[0])),!g&&o.filter&&(g=o.filter.operator),!g&&Array.isArray(c)&&2===c.length&&c[0]&&c[1]&&(g=this._gridOptions.defaultFilterRangeOperator),(g===r.ub.rangeInclusive||r.ub.rangeExclusive)&&Array.isArray(c)&&1===c.length&&h===r.M.date&&(g=r.ub.equal),g||(g=Object(r.kd)(h)),O)d&&this.saveColumnFilter(d,p,c);else{if(m=this.normalizeSearchValue(h,m,u),Array.isArray(c)&&c.forEach((t,e)=>{c[e]=this.normalizeSearchValue(h,c[e],u)}),n="",this._odataService.options.caseType===r.h.pascalCase&&(d=Object(r.Pd)(d||"")),c&&c.length>1&&("IN"===g||"NIN"===g||"NOTIN"===g||"NOT IN"===g||"NOT_IN"===g)){const t=[];if("IN"===g){for(let e=0,i=c.length;e<i;e++)t.push(`${d} eq ${c[e]}`);n=t.join(" or ")}else{for(let e=0,i=c.length;e<i;e++)t.push(`${d} ne ${c[e]}`);n=t.join(" and ")}"string"==typeof n&&"("===n[0]&&")"===n.slice(-1)||(n=`(${n})`)}else"*"===g||"a*"===g||"*z"===g||"*"===f||g===r.ub.startsWith||g===r.ub.endsWith?n="*"===g||"*z"===g||g===r.ub.endsWith?`endswith(${d}, ${m})`:`startswith(${d}, ${m})`:g===r.ub.rangeExclusive||g===r.ub.rangeInclusive?n=this.filterBySearchTermRange(d,g,c):""!==g&&g!==r.ub.contains&&g!==r.ub.notContains||h!==r.M.string&&h!==r.M.text&&h!==r.M.readonly?n=`${d} ${this.mapOdataOperator(g)} ${m}`:(n=u>=4?`contains(${d}, ${m})`:`substringof(${m}, ${d})`,g===r.ub.notContains&&(n="not "+n));""!==n&&(l.push(n.trim()),this.saveColumnFilter(d||"",p,m))}}this._odataService.updateOptions({filter:l.length>0?l.join(" and "):"",skip:void 0})}updatePagination(t,e){this._currentPagination={pageNumber:t,pageSize:e},!this._gridOptions||!this._gridOptions.enablePagination&&this._gridOptions.hasOwnProperty("enablePagination")||this._odataService.updateOptions({top:e,skip:(t-1)*e})}updateSorters(t,e){let i=[];const s=[];if(!t&&e){i=e,i.forEach(t=>t.direction=t.direction.toLowerCase());const t=i.map(t=>{const e=this._columnDefinitions.find(e=>e.id===t.columnId);return s.push({field:e?(e.queryFieldSorter||e.queryField||e.field)+"":t.columnId+"",direction:t.direction}),e?{columnId:t.columnId,sortAsc:t.direction.toUpperCase()===r.Kb.ASC}:null});Array.isArray(t)&&this._grid&&this._grid.setSortColumns(t)}else if(t&&!e)if(0===(null==t?void 0:t.length));else if(t)for(const e of t)if(e.sortCol){let t=(e.sortCol.queryFieldSorter||e.sortCol.queryField||e.sortCol.field)+"",o=(e.sortCol.field||e.sortCol.id)+"",a=(e.sortCol.queryFieldSorter||e.sortCol.queryField||e.sortCol.field||"")+"";this._odataService.options.caseType===r.h.pascalCase&&(t=Object(r.Pd)(t),o=Object(r.Pd)(o),a=Object(r.Pd)(a)),""!==o&&i.push({columnId:o,direction:e.sortAsc?"asc":"desc"}),""!==a&&s.push({field:a,direction:e.sortAsc?r.Kb.ASC:r.Kb.DESC})}i=i||[];const o=s.map(t=>{let e="";if(t&&t.field){e=`${this._odataService.options.caseType===r.h.pascalCase?Object(r.Pd)(t.field):t.field} ${t&&t.direction&&t.direction.toLowerCase()||""}`}return e}).join(",");return this._odataService.updateOptions({orderBy:o}),this._currentSorters=i,this._odataService.buildQuery()}castFilterToColumnFilters(t){const e="object"==typeof t?Object.keys(t).map(e=>t[e]):t;return Array.isArray(e)?e.map(t=>{const e={columnId:t.columnId||""};return t.operator&&(e.operator=t.operator),Array.isArray(t.searchTerms)&&(e.searchTerms=t.searchTerms),e}):[]}filterBySearchTermRange(t,e,i){let s="";return Array.isArray(i)&&2===i.length&&(e===r.ub.rangeInclusive?(s=`(${t} ge ${i[0]}`,""!==i[1]&&(s+=` and ${t} le ${i[1]}`),s+=")"):e===r.ub.rangeExclusive&&(s=`(${t} gt ${i[0]}`,""!==i[1]&&(s+=` and ${t} lt ${i[1]}`),s+=")")),s}normalizeSearchValue(t,e,i){switch(t){case r.M.date:e=Object(r.ud)(e,!0),e=i>=4?e:`DateTime'${e}'`;break;case r.M.string:case r.M.text:case r.M.readonly:"string"==typeof e&&(e=e.replace(/'/g,"''"),e=`'${e=encodeURIComponent(e)}'`);break;case r.M.integer:case r.M.number:case r.M.float:"string"==typeof e&&(""!==(e=(e=(e=(e=(e=e.replace(/\.\./g,".")).replace(/\.+$/g,"")).replace(/^\.+/g,"0.")).replace(/^\-+\.+/g,"-0.")).replace(/(?!^\-)[^\d\.]/g,""))&&"-"!==e||(e="0"))}return e}}},"r8C+":function(t,e,i){"use strict";var r=i("O9xy");i.d(e,"a",(function(){return r.a}))},yxdh:function(t,e,i){"use strict";i.d(e,"a",(function(){return d}));var r=i("NkDI"),s=i("jy4+"),o=i("FLoe"),a=i("slQ5"),n=i("gLLl"),l=i("vStP"),u=i("C6he");class d{constructor(){this.className="RxJsResource"}get EMPTY(){return r.a}createObservable(){return new s.a}createSubject(){return new o.a}firstValueFrom(t){return Object(a.a)(t)}iif(t,e,i){return Object(n.a)(t,e,i)}isObservable(t){return Object(l.a)(t)}takeUntil(t){return Object(u.a)(t)}}}}]);
//# sourceMappingURL=vendors~826d49cf.fcbb3a6646ea855e36de.bundle.map