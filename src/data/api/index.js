import task from '@/concise/modules/axios.js';

export default {
  tlist(params) {
    return task.post('/hnedu/resourceInfo/findResourceInfoList', params);
  },
  pdlist(params) {
    return task.post('/Api/hnedu/resourceInfo/findResourceInfoList', params);
  },
  pdzi(params) {
    return task.get('/Api/hnedu/resourceFormat/findFormatAll', params);
  },
  findTypeAll(params) {
    return task.get('/Api/hnedu/resourceType/findTypeAll', params);
  },
  finBaseTree(params) {
    return task.get('/Api/hnedu/excel/finBaseTree', params);
  },

  findTreeBack(params) {
    return task.get('/Api/hnedu/excel/findTreeBack', params);
  },
  findBySubjectName(params) {
    return task.get('/Api/hnedu/subjectInfo/findBySubjectName', params);
  },
  finBySIdFkList(params) {
    return task.get('/Api/hnedu/subjectVersion/finBySIdFkList', params);
  },

  //登录
  login(params) {
    return task.postp('/Api/hnedu/login', params);
  },
  //年级
  workspace(params) {
    return task.get('/Api/hnedu/workspace/api/workSpaceCatalog/parent?parentID=2', params);
  },
  //科目
  workspace_2(params) {
    return task.get('/Api/hnedu/workspace/api/workSpaceCatalog/subject?catalogID=10', params);
  },
  findWorkSpace(params) {
    return task.getp('/Api/hnedu/workSpace/findWorkSpace', params);
  },
};
