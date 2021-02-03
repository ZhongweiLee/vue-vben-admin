<template>
  <PageWrapper title="基础详情页">
    <Description
      size="middle"
      title="退款申请"
      :bordered="false"
      :column="3"
      :data="dataRef"
      :schema="trailSchema"
    />
  </PageWrapper>
</template>

<script lang="ts">
  import { defineComponent, unref, ref, onBeforeMount } from 'vue';
  import { useRouter } from 'vue-router';
  import { PageWrapper } from '/@/components/Page';

  import { trailSchema } from './detailData';
  import { trailDetailApi } from '/@/api/biz/trail/trail/trail';

  import { Description } from '/@/components/Description/index';

  const dataRef = ref<Recordable>({});

  export default defineComponent({
    components: { PageWrapper, Description },
    setup() {
      const { currentRoute } = useRouter();

      onBeforeMount(async () => {
        var trailId = unref(currentRoute).params.id;
        var detail = await trailDetailApi(trailId as string);

        dataRef.value = detail as Recordable;
        console.log(dataRef.value.id);
      });

      //       async function getData() {
      //         var trailId = unref(currentRoute).params.id;
      //         return await trailDetailApi(trailId as string);
      //       }

      return {
        dataRef,
        prefixCls: 'trail-detail',
        trailSchema,
      };
    },
  });
</script>

<style lang="less" scoped>
  .trail-detail {
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
