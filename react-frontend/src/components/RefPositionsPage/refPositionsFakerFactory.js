
import { faker } from "@faker-js/faker";
export default (count,nameIds,positionIds,roleIds,reportingToidIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
role: roleIds[i % roleIds.length],
reportingToid: reportingToidIds[i % reportingToidIds.length],

        };
        data = [...data, fake];
    }
    return data;
};
