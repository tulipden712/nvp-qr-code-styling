var qrTypes = {};
for (var type = 0; type <= 40; type++) {
  qrTypes[type] = type;
}
// 0 types is autodetect
// types = {
//     0: 0,
//     1: 1,
//     ...
//     40: 40
// }
export default qrTypes;