// 경로를 수정해서 사용
import { get_preference, get_weather } from "./recommend.js";

// 사용자 선호도 기반 메뉴 추천 사용 예시
// 사용자가 면을 선호하는 경우
const res0 = await get_preference(["광뚝사골칼국수", "물냉면", "냉모밀"]);
console.log(res0);

// 사용자가 일식을 선호하는 경우
const res1 = await get_preference(["오므라이스", "스팸마요덮밥(라지)", "새우튀김 우동"]);
console.log(res1);

// 사용자가 매운 음식을 선호하는 경우
const res2 = await get_preference(["마라쌀국수(고기없음)", "얼큰순대국밥", "제육덮밥"]);
console.log(res2);

// 날씨 기반 메뉴 추천 사용 예시
const res3 = await get_weather();
console.log(res3);