<template>
  <PageWrapper :class="prefixCls">
    <CollapseContainer>
      <BasicForm @register="registerForm" />
    </CollapseContainer>

    <div :class="`${prefixCls}__container`">
      <a-list>
        <template #loadMore>
          <div
            v-if="showLoadingMore"
            :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }"
          >
            <Spin v-if="loadingMore" />
            <a-button v-else @click="onLoadMore"> 加载更多 </a-button>
          </div>
        </template>

        <template v-for="item in list" :key="item.id">
          <a-list-item>
            <template #actions>
              <a>编辑</a>
              <router-link :to="`/trail/detail/${item.id}`"> 详情 </router-link>
            </template>
            <a-list-item-meta>
              <template #description>
                <div :class="`${prefixCls}__content`">
                  {{
                    item.content.length > 140 ? item.content.slice(0, 140) + '...' : item.content
                  }}
                </div>
                <div :class="`${prefixCls}__action`">
                  <div :class="`${prefixCls}__action-item`">
                    <Icon
                      :class="`${prefixCls}__action-icon`"
                      icon="carbon:location"
                      color="#018ffb"
                    />
                    {{ item.province }}·{{ item.destination }}
                  </div>

                  <div :class="`${prefixCls}__action-item`">
                    <Icon
                      :class="`${prefixCls}__action-icon`"
                      icon="carbon:ticket"
                      color="#018ffb"
                    />
                    {{ item.ticketFree ? 'Free' : '有门票' }}
                  </div>
                  <div :class="`${prefixCls}__action-item`">
                    <Icon
                      :class="`${prefixCls}__action-icon`"
                      icon="carbon:chart-maximum"
                      color="#018ffb"
                    />
                    {{ item.maximumAltitude }} 米
                  </div>
                  <div :class="`${prefixCls}__action-item`">
                    <Icon
                      :class="`${prefixCls}__action-icon`"
                      icon="bi:calendar-day"
                      color="#018ffb"
                    />
                    {{ item.days }} 天
                  </div>

                  <div :class="`${prefixCls}__action-item`">
                    <Icon
                      :class="`${prefixCls}__action-icon`"
                      icon="ant-design:money-collect-filled"
                      color="red"
                    />
                    {{ item.totalMoney }} RMB
                  </div>

                  <div :class="`${prefixCls}__action-item`">
                    <Icon
                      :class="`${prefixCls}__action-icon`"
                      icon="mdi:map-marker-distance"
                      color="#018ffb"
                    />
                    {{ item.km }} KM
                  </div>

                  <span :class="`${prefixCls}__time`">{{
                    moment(item.createTime).format('YYYY-MM-DD HH:mm:ss')
                  }}</span>
                </div>
              </template>
              <template #title>
                <div>
                  <p :class="`${prefixCls}__title`">
                    {{ item.title }}
                  </p>
                </div>

                <div>
                  <Tag class="mb-2" color="green"> 风景{{ item.sceneryStar }}星 </Tag>
                  <Tag class="mb-2" color="red"> 难度{{ item.hardship }}星 </Tag>
                  <Tag class="mb-2" color="warning"> 成熟度{{ item.maturity }}星 </Tag>
                  <Tag class="mb-2" color="blue"> {{ getStateLabel(item.state) }}</Tag>
                  <Tag class="mb-2" color="green"> {{ item.shortName }} </Tag>
                </div>
              </template>
              <template #avatar>
                <img :class="`${prefixCls}__img`" :src="item.itemPic" />
              </template>
            </a-list-item-meta>
          </a-list-item>
        </template>
      </a-list>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import Icon from '/@/components/Icon/index';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container/index';
  import { schemas } from './trailData';
  import { PageWrapper } from '/@/components/Page';
  import { List, Tag, Spin } from 'ant-design-vue';
  import moment from 'moment';
  import { TrailItem, getStateLabel } from '/@/api/biz/trail/trail/model/trailModel';
  import { trailListApi } from '/@/api/biz/trail/trail/trail';

  export default defineComponent({
    components: {
      Icon,
      Tag,
      Spin,
      BasicForm,
      PageWrapper,
      CollapseContainer,
      [List.name]: List,
      [List.Item.name]: List.Item,
      AListItemMeta: List.Item.Meta,
    },

    setup() {
      const searchList = ref<TrailItem[]>([]);

      const defaultPageSize = 10;
      const total = ref<number>(0);
      const curPage = ref<number>(1);
      const showLoadingMore = ref<boolean>();

      const [registerForm, { getFieldsValue }] = useForm({
        labelWidth: 80,
        schemas,
        showActionButtonGroup: true,
        actionColOptions: { span: 24 },
        submitFunc: handleSubmit,
        size: 'large',
      });

      async function handleSubmit() {
        curPage.value = 1;
        loadingMore.value = true;

        var res = await trailListApi({
          page: curPage.value,
          pageSize: defaultPageSize,
          title: getFieldsValue().title,
          state: getFieldsValue().state,
        });

        loadingMore.value = false;
        total.value = res.total;
        searchList.value = res.items;
        showLoadingMore.value = curPage.value * defaultPageSize < total.value ? true : false;
      }
      onMounted(async () => {
        handleSubmit();
      });

      const loadingMore = ref<Boolean>(false);

      async function onLoadMore() {
        loadingMore.value = true;
        curPage.value = curPage.value + 1;
        await trailListApi({
          page: curPage.value,
          pageSize: defaultPageSize,
          title: getFieldsValue().title,
          state: getFieldsValue().state,
        }).then((val) => {
          loadingMore.value = false;
          total.value = val.total;
          if (val.items.length <= 0) {
            curPage.value = curPage.value - 1;
          }

          val.items.forEach((element) => {
            searchList.value.push(element);
          });
          showLoadingMore.value = curPage.value * defaultPageSize < total.value ? true : false;
        });
      }

      return {
        prefixCls: 'list-search',
        list: searchList,
        loadingMore,
        showLoadingMore,
        schemas,
        getStateLabel,
        moment,
        onLoadMore,
        registerForm,
      };
    },
  });
</script>
<style lang="less" scoped>
  .list-search {
    &__header {
      &-form {
        margin-bottom: -16px;
      }
    }

    &__container {
      padding: 12px;
      background: #fff;
    }

    &__title {
      margin-bottom: 12px;
      font-size: 18px;
    }

    &__img {
      width: 200px;
    }

    &__content {
      color: rgba(0, 0, 0, 0.65);
    }

    &__action {
      margin-top: 10px;

      &-item {
        display: inline-block;
        padding: 0 8px;
        color: rgba(0, 0, 0, 0.45);

        &:nth-child(1) {
          padding-left: 0;
        }
      }

      &-icon {
        margin-right: 3px;
      }
    }

    &__time {
      position: absolute;
      right: 20px;
      color: rgba(0, 0, 0, 0.45);
    }
  }
</style>
