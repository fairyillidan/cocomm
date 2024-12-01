const propertyOf = "example";
const property = "name";
const v1 = 10;
const v2 = 20;

const result = "Conflicting ".concat(propertyOf.toString(), " property \"").concat(property.toString(), "\" (").concat(v1.toString(), " and ").concat(v2.toString(), "). Using ").concat(v1.toString(), ".");

console.log(result);
