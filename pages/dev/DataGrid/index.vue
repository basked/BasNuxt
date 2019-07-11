<template>
  <div class="datagrid">
    <dx-data-grid
      id="gridContainer"
      :allow-column-reordering="true"
      :column-hiding-enabled="true"
      :data-source="persons"
      :show-borders="true"
      :allow-column-resizing="true"
    >
      <dx-column
        :width="80"
        :allow-sorting="false"
        :calculate-cell-value="getPhotoUrl"
        caption="Фото"
        cell-template="cellTemplate"/>
      <!--data-field="Picture"-->
      <!---->
      <dx-column :width="200"
                 :calculate-cell-value="calculateCellValue"
                 caption="ФИО"/>
      <dx-column data-field="TABELNYI_NOMER" :width="40" caption="Т.Н."/>
      <dx-column data-field="FAMILIIA" :width="1"/>

      <dx-column data-field="SEMEINOE_POLOZHENIE" :visible="false" caption="Семейн. полож."/>
      <dx-column data-field="DATA_ROZHDENIIA" :width="90" caption="Дата рожд."/>
      <dx-column :width="200"
                 :calculate-cell-value="getYearR"
                 caption="Год рождения"/>
      <dx-column data-field="MESTO_ROZHDENIIA" :width="150" caption="Место рождения"/>
      <dx-column data-field="ADDRESS_PASPORT"  caption="Адрес прописки"/>
      <dx-column data-field="ADDRESS_FAKT" caption="Адрес фактический"/>
      <dx-column data-field="DOM_TEL" :visible="false" caption="Тел. домашний"/>
      <dx-column data-field="SOT_TEL" :visible="false" caption="Тел. мобильный"/>
      <dx-column data-field="VID_OBRAZOVANIIA" :visible="false" caption="Образование"/>
      <dx-column data-field="NAZVANIE_VUZA" :visible="false" caption="ВУЗ"/>
      <dx-column data-field="PODRAZDELENIE" :visible="false" caption="Подразделение"/>
      <dx-column data-field="POLNAIA_PROFESSIIA" :visible="false" caption="Профессия"/>

      <dx-column
        :group-index="0"
        data-field="PODRAZDELENIE"
        caption=""
      />
      <dx-summary>
        <dx-group-item
          column="PODRAZDELENIE"
          summary-type="count"
          display-format="{0} сотрудников"
        />
      </dx-summary>
      <dx-header-filter :visible="showHeaderFilter"/>
      <dx-group-panel :visible="true"/>
      <dx-filter-panel :visible="true"/>
      <dx-column-chooser :enabled="true" mode="select" title="Поля данных"/>
      <dx-grouping :auto-expand-all="autoExpandAll"/>
      <dx-paging :page-size="15"/>
      <dx-search-panel :visible="true"/>
      <dx-pager
        :show-page-size-selector="true"
        :allowed-page-sizes="[15, 25, 50, 150]"
      />
      <div
        slot="cellTemplate"
        slot-scope="{ data }"
      >
        <!--<img :src="'/img/persons/'"+"data.TABELNYI_NOMER"+".jpg">-->
        <img :src="['/img/persons/',data.TABELNYI_NOMER,'.jpg'].join('')">
      </div>
    </dx-data-grid>

    <div class="options">
      <div class="caption">Options</div>
      <div class="option">
        <dx-check-box
          :value.sync="autoExpandAll"
          text="Expand All Groups"
        />
      </div>
    </div>
  </div>
</template>
<script>
  import 'devextreme/dist/css/dx.common.css';
  import 'devextreme/dist/css/dx.darkmoon.compact.css';
  import service from '@/store/PersonGT/index.js'
  import {DxCheckBox} from 'devextreme-vue';
  import {
    DxColumn,
    DxColumnChooser,
    DxDataGrid,
    DxFilterPanel,
    DxGrouping,
    DxGroupItem,
    DxGroupPanel,
    DxHeaderFilter,
    DxPager,
    DxPaging,
    DxSearchPanel,
    DxSortByGroupSummaryInfo,
    DxSummary
  } from 'devextreme-vue/data-grid';

  export default {
    components: {
      DxCheckBox,
      DxColumn,
      DxGroupPanel,
      DxGrouping,
      DxPaging,
      DxSearchPanel,
      DxDataGrid,
      DxColumnChooser,
      DxFilterPanel,
      DxHeaderFilter,
      DxPager,
      DxSummary,
      DxGroupItem,
      DxSortByGroupSummaryInfo
    },
    data() {
      return {
        autoExpandAll: true,
        persons: service.getPersons(),
        showHeaderFilter: true
      };
    },
    methods: {
      calculateCellValue(data) {
        return [data.FAMILIIA, data.IMIA, data.OTCHESTVO].join(' ');
      },
      getPhotoUrl(data) {
        // console.log('@/static/img/persons/'+data.TABELNYI_NOMER+'.jpg');
        return ['/img/persons/', data.TABELNYI_NOMER, '.jpg'].join('');
      },
      getTN(data) {
        // console.log('@/static/img/persons/'+data.TABELNYI_NOMER+'.jpg');
        return data.TABELNYI_NOMER;
      },
      getYearR(data) {
        // console.log('@/static/img/persons/'+data.TABELNYI_NOMER+'.jpg');

        return data.DATA_ROZHDENIIA.substring(6, 10);
      }
    }
  };
</script>
<style scoped>
  #gridContainer {
    height: 540px;
  }

  img {
    height: 100px;
    display: block;
  }


  .options {
    padding: 20px;
    margin-top: 20px;
    background-color: rgba(191, 191, 191, 0.15);
  }

  .caption {
    font-size: 18px;
    font-weight: 500;
  }

  .option {
    margin-top: 10px;
  }

  .datagrid {
    background: #4C5D7B;
  }
</style>
