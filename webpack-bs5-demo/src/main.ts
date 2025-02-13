import Aurelia from 'aurelia';
// Css files imported in this main file are NOT processed by style-loader
// They are for sharedStyles in shadowDOM.
// However, css files imported in other js/ts files are processed by style-loader.
// import shared from './shared.css';
import { AureliaSlickGridConfiguration } from 'aurelia-slickgrid';
import { I18nConfiguration } from '@aurelia/i18n';
import Fetch from 'i18next-fetch-backend';
import { RouterConfiguration } from '@aurelia/router';
import { DateFormatValueConverter, DecimalValueConverter, StringifyValueConverter } from './examples/resources/value-converters';
import DOMPurify from 'dompurify';
import 'bootstrap';

// dynamic components that can be enhanced in Example 19, 26
import { MyApp } from './my-app';
import { CustomPagerComponent } from './examples/slickgrid/example42-pager';
import { CustomTitleFormatter } from './examples/slickgrid/custom-title-formatter';
import { EditorSelect } from './examples/slickgrid/editor-select';
import { FilterSelect } from './examples/slickgrid/filter-select';
import { Example19DetailView } from './examples/slickgrid/example19-detail-view';
import { Example19Preload } from './examples/slickgrid/example19-preload';

Aurelia
  // Register all exports of the plugin
  .register(
    RouterConfiguration.customize({ useHref: false }),

    // dynamic components to enhance
    CustomPagerComponent,
    CustomTitleFormatter,
    Example19DetailView,
    Example19Preload,
    EditorSelect,
    FilterSelect,
  )
  .register(I18nConfiguration.customize((options) => {
    options.translationAttributeAliases = ['i18n', 'tr'];
    options.initOptions = {
      backend: {
        loadPath: './assets/i18n/{{lng}}/{{ns}}.json',
      },
      lng: 'en',
      ns: ['aurelia-slickgrid'],
      defaultNS: 'aurelia-slickgrid',
      fallbackLng: 'en',
      debug: false,
      plugins: [Fetch],
    };
  }))
  .register(AureliaSlickGridConfiguration.customize(config => {
    // change any of the default global options
    config.options.gridMenu!.iconCssClass = 'mdi mdi-menu';

    // we strongly suggest you add DOMPurify as a sanitizer
    config.options.sanitizer = (dirtyHtml) => DOMPurify.sanitize(dirtyHtml, { ADD_ATTR: ['level'], RETURN_TRUSTED_TYPE: true });
  }))
  .register(DecimalValueConverter, StringifyValueConverter, DateFormatValueConverter)
  .app(MyApp)
  .start();
