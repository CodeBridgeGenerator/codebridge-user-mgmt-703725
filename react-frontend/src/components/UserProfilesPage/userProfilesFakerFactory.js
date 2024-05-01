
import { faker } from "@faker-js/faker";
export default (count,nameIds,positionIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
name: nameIds[i % nameIds.length],
position: positionIds[i % positionIds.length],

        };
        data = [...data, fake];
    }
    return data;
};
