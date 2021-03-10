// const Arr = {
//   setcate(data, tree) {
//     if (Array.isArray(data) && data.length > 0) {
//       // 循环数组
//       data.forEach((item, i) => {
//         tree[i] = {};
//         tree[i].value = item.cat_id
//         tree[i].label = item.cat_name
//         // 判断二级数组是否有children 属性
//         if (item.hasOwnProperty('children')) {
//           let arr = [];
//           this.setcate(item.children, arr);
//           tree[i].children = arr
//         }
//       })
//     }
//   }
// }
// export default Arr