// 골프장 데이터를 모두 직접 스크립트에 포함 (외부 파일 로드 문제 해결)
const allGolfCourses = [
    {
        id: 1,
        title: "해운대비치 CC",
        url: "https://food.dokbun2.com/97"
    },
    {
        id: 2,
        title: "동래베네스트 CC",
        url: "https://food.dokbun2.com/96"
    },
    {
        id: 3,
        title: "해피니스 GC",
        url: "https://food.dokbun2.com/95"
    },
    {
        id: 4,
        title: "화산 CC",
        url: "https://food.dokbun2.com/94"
    },
    {
        id: 5,
        title: "힐데스하임 CC",
        url: "https://food.dokbun2.com/93"
    },
    {
        id: 6,
        title: "H1 CC",
        url: "https://food.dokbun2.com/74"
    },
    {
        id: 7,
        title: "페럼CC",
        url: "https://food.dokbun2.com/73"
    },
    {
        id: 8,
        title: "렉스필드CC",
        url: "https://food.dokbun2.com/72"
    },
    {
        id: 9,
        title: "그린힐CC",
        url: "https://food.dokbun2.com/71"
    },
    {
        id: 10,
        title: "아시아나CC",
        url: "https://food.dokbun2.com/70"
    },
    {
        id: 11,
        title: "로제비앙CC",
        url: "https://food.dokbun2.com/68"
    },
    {
        id: 12,
        title: "힐드로사이CC",
        url: "https://food.dokbun2.com/67"
    },
    {
        id: 13,
        title: "설해원CC",
        url: "https://food.dokbun2.com/66"
    },
    {
        id: 14,
        title: "파인크리크CC",
        url: "https://food.dokbun2.com/65"
    },
    {
        id: 15,
        title: "정산CC",
        url: "https://food.dokbun2.com/64"
    },
    {
        id: 16,
        title: "군산CC",
        url: "https://food.dokbun2.com/63"
    },
    {
        id: 17,
        title: "써미트CC",
        url: "https://food.dokbun2.com/60"
    },
    {
        id: 18,
        title: "골프클럽Q",
        url: "https://food.dokbun2.com/59"
    },
    {
        id: 19,
        title: "코리아CC",
        url: "https://food.dokbun2.com/58"
    },
    {
        id: 20,
        title: "베스트밸리CC",
        url: "https://food.dokbun2.com/57"
    },
    {
        id: 21,
        title: "클럽72CC",
        url: "https://food.dokbun2.com/56"
    },
    {
        id: 22,
        title: "솔트베이CC",
        url: "https://food.dokbun2.com/55"
    },
    {
        id: 23,
        title: "레인보우힐스CC",
        url: "https://food.dokbun2.com/54"
    },
    {
        id: 24,
        title: "양지파인CC",
        url: "https://food.dokbun2.com/53"
    },
    {
        id: 25,
        title: "천룡CC",
        url: "https://food.dokbun2.com/52"
    },
    {
        id: 26,
        title: "가평베네스트CC",
        url: "https://food.dokbun2.com/51"
    },
    {
        id: 27,
        title: "포천아도니스CC",
        url: "https://food.dokbun2.com/50"
    },
    {
        id: 28,
        title: "더크로스비CC",
        url: "https://food.dokbun2.com/49"
    },
    {
        id: 29,
        title: "라비에벨CC",
        url: "https://food.dokbun2.com/48"
    },
    {
        id: 30,
        title: "블랙스톤 이천CC",
        url: "https://food.dokbun2.com/47"
    },
    {
        id: 31,
        title: "파크밸리CC",
        url: "https://food.dokbun2.com/46"
    },
    {
        id: 32,
        title: "성문안CC",
        url: "https://food.dokbun2.com/45"
    },
    {
        id: 33,
        title: "중부CC",
        url: "https://food.dokbun2.com/44"
    },
    {
        id: 34,
        title: "노스팜CC",
        url: "https://food.dokbun2.com/43"
    },
    {
        id: 35,
        title: "실크밸리CC",
        url: "https://food.dokbun2.com/42"
    },
    {
        id: 36,
        title: "서서울CC",
        url: "https://food.dokbun2.com/41"
    },
    {
        id: 37,
        title: "벨라45CC",
        url: "https://food.dokbun2.com/40"
    },
    {
        id: 38,
        title: "한림광릉CC",
        url: "https://food.dokbun2.com/39"
    },
    {
        id: 39,
        title: "파주CC",
        url: "https://food.dokbun2.com/37"
    },
    {
        id: 40,
        title: "썬힐CC, 리앤리CC",
        url: "https://food.dokbun2.com/36"
    },
    {
        id: 41,
        title: "서원힐스CC",
        url: "https://food.dokbun2.com/35"
    },
    {
        id: 42,
        title: "은화삼CC",
        url: "https://food.dokbun2.com/34"
    },
    {
        id: 43,
        title: "신안CC",
        url: "https://food.dokbun2.com/33"
    },
    {
        id: 44,
        title: "비에이비스타CC",
        url: "https://food.dokbun2.com/32"
    },
    {
        id: 45,
        title: "한원CC",
        url: "https://food.dokbun2.com/31"
    },
    {
        id: 46,
        title: "양평TPC",
        url: "https://food.dokbun2.com/30"
    },
    {
        id: 47,
        title: "신라CC",
        url: "https://food.dokbun2.com/29"
    },
    {
        id: 48,
        title: "젠스필드CC",
        url: "https://food.dokbun2.com/28"
    },
    {
        id: 49,
        title: "캐슬렉스CC",
        url: "https://food.dokbun2.com/27"
    },
    {
        id: 50,
        title: "안성베네스트CC",
        url: "https://food.dokbun2.com/26"
    },
    {
        id: 51,
        title: "글렌로스CC",
        url: "https://food.dokbun2.com/25"
    },
    {
        id: 52,
        title: "스카이밸리CC",
        url: "https://food.dokbun2.com/24"
    },
    {
        id: 53,
        title: "써닝포인트CC",
        url: "https://food.dokbun2.com/23"
    },
    {
        id: 54,
        title: "이글몬트CC",
        url: "https://food.dokbun2.com/22"
    },
    {
        id: 55,
        title: "루트 52CC",
        url: "https://food.dokbun2.com/21"
    },
    {
        id: 56,
        title: "더플레이어스CC",
        url: "https://food.dokbun2.com/20"
    },
    {
        id: 57,
        title: "클럽모우CC",
        url: "https://food.dokbun2.com/19"
    },
    {
        id: 58,
        title: "샤인데일CC",
        url: "https://food.dokbun2.com/18"
    },
    {
        id: 59,
        title: "군포 안양CC",
        url: "https://food.dokbun2.com/17"
    },
    {
        id: 60,
        title: "오너스CC",
        url: "https://food.dokbun2.com/16"
    },
    {
        id: 61,
        title: "필로스CC",
        url: "https://food.dokbun2.com/15"
    },
    {
        id: 62,
        title: "비콘힐스CC",
        url: "https://food.dokbun2.com/14"
    },
    {
        id: 63,
        title: "에덴블루CC",
        url: "https://food.dokbun2.com/13"
    },
    {
        id: 64,
        title: "휘슬링락CC",
        url: "https://food.dokbun2.com/12"
    },
    {
        id: 65,
        title: "몽베르CC",
        url: "https://food.dokbun2.com/11"
    },
    {
        id: 66,
        title: "이천마이더스CC",
        url: "https://food.dokbun2.com/10"
    },
    {
        id: 67,
        title: "레이크우드CC",
        url: "https://food.dokbun2.com/9"
    },
    {
        id: 68,
        title: "베뉴지CC",
        url: "https://food.dokbun2.com/8"
    },
    {
        id: 69,
        title: "라싸CC",
        url: "https://food.dokbun2.com/7"
    },
    {
        id: 70,
        title: "금강CC",
        url: "https://food.dokbun2.com/6"
    },
    {
        id: 71,
        title: "포천힐스CC",
        url: "https://food.dokbun2.com/5"
    },
    {
        id: 72,
        title: "솔모로CC",
        url: "https://food.dokbun2.com/3"
    },
    {
        id: 73,
        title: "파가니카CC",
        url: "https://food.dokbun2.com/2"
    },
    {
        id: 74,
        title: "소노펠리체CC",
        url: "https://food.dokbun2.com/79"
    },
    {
        id: 75,
        title: "시그너스CC",
        url: "https://food.dokbun2.com/80"
    },
    {
        id: 76,
        title: "세라지오CC",
        url: "https://food.dokbun2.com/81"
    },
    {
        id: 77,
        title: "푸른솔포천CC",
        url: "https://food.dokbun2.com/82"
    },
    {
        id: 78,
        title: "발리오스CC",
        url: "https://food.dokbun2.com/83"
    },
    {
        id: 79,
        title: "웰리힐리CC",
        url: "https://food.dokbun2.com/84"
    },
    {
        id: 80,
        title: "강남300CC",
        url: "https://food.dokbun2.com/85"
    },
    {
        id: 81,
        title: "뉴스프링빌CC",
        url: "https://food.dokbun2.com/86"
    },
    {
        id: 82,
        title: "진양밸리CC",
        url: "https://food.dokbun2.com/87"
    },
    {
        id: 83,
        title: "아리지CC",
        url: "https://food.dokbun2.com/88"
    },
    {
        id: 84,
        title: "양지파인CC",
        url: "https://food.dokbun2.com/90"
    },
    {
        id: 85,
        title: "로얄포레CC",
        url: "https://food.dokbun2.com/91"
    },
    {
        id: 86,
        title: "제이드팰리스CC",
        url: "https://food.dokbun2.com/98"
    },
    {
        id: 87,
        title: "해슬리 나인브릿지 GC",
        url: "https://food.dokbun2.com/99"
    },
    {
        id: 88,
        title: "떼제베 CC",
        url: "https://food.dokbun2.com/100"
    },
    {
        id: 89,
        title: "세이지우드 홍천 CC",
        url: "https://food.dokbun2.com/101"
    },
    {
        id: 90,
        title: "서산수 CC",
        url: "https://food.dokbun2.com/102"
    },
    {
        id: 91,
        title: "블루원 용인 CC",
        url: "https://food.dokbun2.com/103"
    },
    {
        id: 92,
        title: "송추 CC",
        url: "https://food.dokbun2.com/105"
    },
    {
        id: 93,
        title: "곤지함GC",
        url: "https://food.dokbun2.com/106"
    },
    {
        id: 94,
        title: "트리니티 CC",
        url: "https://food.dokbun2.com/107"
    },
    {
        id: 95,
        title: "파인리즈 CC",
        url: "https://food.dokbun2.com/108"
    },
    {
        id: 96,
        title: "우정힐스 GC",
        url: "https://food.dokbun2.com/110"
    },
    {
        id: 97,
        title: "베어즈베스트 청라",
        url: "https://food.dokbun2.com/111"
    },
    {
        id: 98,
        title: "남부 CC",
        url: "https://food.dokbun2.com/112"
    },
    {
        id: 99,
        title: "임페리얼레이크 CC",
        url: "https://food.dokbun2.com/113"
    },
    {
        id: 100,
        title: "엘리시안 강촌 CC",
        url: "https://food.dokbun2.com/115"
    },
    {
        id: 101,
        title: "킹스데일 GC",
        url: "https://food.dokbun2.com/116"
    },
    {
        id: 102,
        title: "태광 CC",
        url: "https://food.dokbun2.com/117"
    },
    {
        id: 103,
        title: "그랜드 CC",
        url: "https://food.dokbun2.com/118"
    },
    {
        id: 104,
        title: "로얄링스 CC",
        url: "https://food.dokbun2.com/123"
    },
    {
        id: 105,
        title: "솔라고 CC",
        url: "https://food.dokbun2.com/122"
    },
    {
        id: 106,
        title: "아름다운CC",
        url: "https://food.dokbun2.com/121"
    },
    {
        id: 107,
        title: "청평마이다스CC",
        url: "https://food.dokbun2.com/120"
    },
    {
        id: 108,
        title: "양주 CC",
        url: "https://food.dokbun2.com/119"
    },
    {
        id: 109,
        title: "블루헤런GC",
        url: "https://food.dokbun2.com/132"
    },
    {
        id: 110,
        title: "동촌CC",
        url: "https://food.dokbun2.com/131"
    },
    {
        id: 111,
        title: "포레스트힐CC",
        url: "https://food.dokbun2.com/130"
    },
    {
        id: 112,
        title: "이포CC",
        url: "https://food.dokbun2.com/130"
    },
    {
        id: 113,
        title: "김포씨사이드CC",
        url: "https://food.dokbun2.com/129"
    },
    {
        id: 114,
        title: "무등산CC",
        url: "https://food.dokbun2.com/128"
    },
    {
        id: 115,
        title: "세븐밸리CC",
        url: "https://food.dokbun2.com/127"
    },
    {
        id: 116,
        title: "골프존카운티 선산CC",
        url: "https://food.dokbun2.com/126"
    },
    {
        id: 117,
        title: "파인스톤 CC",
        url: "https://food.dokbun2.com/125"
    },
    {
        id: 118,
        title: "천안상록 CC",
        url: "https://food.dokbun2.com/124"
    }
];

// 초기화 함수 - 모든 골프장 데이터 사용
function initializeGolfCourseSearch() {
    console.log("골프장 검색 초기화 - 전체 " + allGolfCourses.length + "개 골프장 사용");
    setupSearch(allGolfCourses);
}

// 검색 기능 설정 함수 (golfCourses 데이터를 인자로 받도록 수정)
function setupSearch(golfCourses) {
    console.log("setupSearch 함수 실행됨");
    
    const golfCourseSelect = document.getElementById('golf-course-select');
    const searchButton = document.getElementById('search-button');
    
    if (!golfCourseSelect || !searchButton) {
        console.error("필요한 DOM 요소를 찾을 수 없습니다.");
        return;
    }
    
    // 기존 옵션 지우기 (첫 번째 "골프장을 선택하세요" 옵션 제외)
    while (golfCourseSelect.options.length > 1) {
        golfCourseSelect.remove(1);
    }
    
    // 골프장 이름으로 정렬 (가나다순)
    const sortedGolfCourses = [...golfCourses].sort((a, b) => {
        return a.title.localeCompare(b.title, 'ko');
    });
    
    // 드롭다운에 옵션 추가
    sortedGolfCourses.forEach(course => {
        const option = document.createElement('option');
        option.value = course.id; // 값으로 ID를 사용 (URL 대신)
        option.textContent = course.title;
        golfCourseSelect.appendChild(option);
    });
    
    // 검색 버튼 클릭 이벤트
    searchButton.addEventListener('click', () => performSearch(golfCourses, golfCourseSelect)); // golfCourses와 select 요소 전달
    
    // 드롭다운 변경 이벤트
    golfCourseSelect.addEventListener('change', function() {
        if (this.value) {
            performSearch(golfCourses, this); // golfCourses와 현재 select 요소 전달
        }
    });
}

// 검색 실행 함수 (golfCourses와 select 요소를 인자로 받도록 수정)
function performSearch(golfCourses, golfCourseSelectElement) {
    console.log("performSearch 함수 실행됨");
    
    const selectedCourseId = parseInt(golfCourseSelectElement.value);
    console.log("선택된 ID:", selectedCourseId);
    
    if (!selectedCourseId) {
        console.log("선택된 골프장이 없음");
        return;
    }
    
    // 선택된 골프장 찾기
    const selectedCourse = golfCourses.find(course => course.id === selectedCourseId);
    console.log("선택된 골프장:", selectedCourse);
    
    // 사용자가 선택한 골프장으로 자동 이동
    if (selectedCourse && selectedCourse.url) {
        console.log("이동할 URL:", selectedCourse.url);
        window.location.href = selectedCourse.url;
    } else {
        console.error("선택된 골프장의 URL을 찾을 수 없습니다.");
    }
}

// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOMContentLoaded 이벤트 발생");
    initializeGolfCourseSearch(); // 전체 데이터를 사용하는 초기화 함수 호출
});

// 페이지가 이미 로드된 경우를 대비한 즉시 실행 검사
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    console.log("페이지가 이미 로드되어 있음");
    setTimeout(function() {
        var hasOptions = document.getElementById('golf-course-select') && 
                        document.getElementById('golf-course-select').options.length > 1;
        
        if (!hasOptions) {
            console.log("골프장 옵션이 아직 로드되지 않음, 초기화 함수 호출");
            initializeGolfCourseSearch();
        }
    }, 100);
}