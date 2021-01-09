import { BasicColumn } from '/@/components/Table/src/types/table';

export function getMenuListColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      fixed: 'left',
      width: 150,
    },
    {
      title: '菜单名称',
      dataIndex: 'metaTitle',
      width: 100,
    },
    {
      title: '图标',
      dataIndex: 'metaIcon',
      width: 100,
    },
    {
      title: '组件',
      dataIndex: 'component',
      width: 150,
    },
    {
      title: '跳转',
      width: 100,
      dataIndex: 'redirect',
    },
    {
      title: '路径',
      width: 100,
      dataIndex: 'path',
    },
  ];
}
