import { BasicColumn } from '/@/components/Table/src/types/table';

export function getDeptListColumns(): BasicColumn[] {
  return [
    {
      title: '部门ID',
      dataIndex: 'deptId',
      fixed: 'left',
      width: 150,
    },
    {
      title: '部门名称',
      dataIndex: 'deptName',
      width: 100,
    },
    {
      title: '部门负责人',
      dataIndex: 'leader',
      width: 100,
    },
    {
      title: '手机号',
      dataIndex: 'phone',
      width: 150,
    },
    {
      title: '状态',
      width: 100,
      sorter: true,
      dataIndex: 'status',
    },
  ];
}
