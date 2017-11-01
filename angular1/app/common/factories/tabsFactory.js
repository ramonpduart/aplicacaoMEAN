(function(){
  angular.module('primeiraApp').factory('tabs', [ TabsFactory ])


    function TabsFactory() {

   function show(owner, {
      tabList = false,
      tabCreate = false,
      tabUpdate = false,
      tabDelete = false,
      tabView = false
   }) {
      owner.tabList = tabList
      owner.tabCreate = tabCreate
      owner.tabUpdate = tabUpdate
      owner.tabDelete = tabDelete
      owner.tabView = tabView
   }

   return { show }
}
})()
