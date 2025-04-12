// 검색 기능 설정 함수
function setupSearch() {
    const golfCourseSelect = document.getElementById('golf-course-select');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');
    const resultsContainer = document.querySelector('.results-container');
    
    // 골프장 이름으로 정렬 (가나다순)
    const sortedGolfCourses = [...golfCourses].sort((a, b) => {
        return a.title.localeCompare(b.title, 'ko');
    });
    
    // 드롭다운에 옵션 추가
    sortedGolfCourses.forEach(course => {
        const option = document.createElement('option');
        option.value = course.id;
        option.textContent = course.title;
        golfCourseSelect.appendChild(option);
    });
    
    // 검색 버튼 클릭 이벤트
    searchButton.addEventListener('click', performSearch);
    
    // 드롭다운 변경 이벤트
    golfCourseSelect.addEventListener('change', function() {
        if (this.value) {
            performSearch();
        } else {
            // 옵션이 선택되지 않았으면 원래 화면으로 돌아감
            searchResults.style.display = 'none';
        }
    });
    
    // 검색 실행 함수
    function performSearch() {
        const selectedCourseId = parseInt(golfCourseSelect.value);
        
        if (!selectedCourseId) {
            // 선택된 골프장이 없으면 원래 화면으로 돌아감
            searchResults.style.display = 'none';
            return;
        }
        
        // 선택된 골프장 찾기
        const selectedCourse = golfCourses.find(course => course.id === selectedCourseId);
        
        // 사용자가 선택한 골프장으로 자동 이동
        if (selectedCourse && selectedCourse.url) {
            window.location.href = selectedCourse.url;
        }
    }
}// 골프장 데이터
const golfCourses = [
    {
        id: 1,
        title: "H1 CC",
        url: "https://food.dokbun2.com/74"
    },
    {
        id: 2,
        title: "페럼CC",
        url: "https://food.dokbun2.com/73"
    },
    {
        id: 3,
        title: "렉스필드CC",
        url: "https://food.dokbun2.com/72"
    },
    {
        id: 4,
        title: "그린힐CC",
        url: "https://food.dokbun2.com/71"
    },
    {
        id: 5,
        title: "아시아나CC",
        url: "https://food.dokbun2.com/70"
    },
    {
        id: 6,
        title: "로제비앙CC",
        url: "https://food.dokbun2.com/68"
    },
    {
        id: 7,
        title: "힐드로사이CC",
        url: "https://food.dokbun2.com/67"
    },
    {
        id: 8,
        title: "설해원CC",
        url: "https://food.dokbun2.com/66"
    },
    {
        id: 9,
        title: "파인크리크CC",
        url: "https://food.dokbun2.com/65"
    },
    {
        id: 10,
        title: "정산CC",
        url: "https://food.dokbun2.com/64"
    },
    {
        id: 11,
        title: "군산CC",
        url: "https://food.dokbun2.com/63"
    },
    {
        id: 12,
        title: "써미트CC",
        url: "https://food.dokbun2.com/60"
    },
    {
        id: 13,
        title: "골프클럽Q",
        url: "https://food.dokbun2.com/59"
    },
    {
        id: 14,
        title: "코리아CC",
        url: "https://food.dokbun2.com/58"
    },
    {
        id: 15,
        title: "베스트밸리CC",
        url: "https://food.dokbun2.com/57"
    },
    {
        id: 16,
        title: "클럽72CC",
        url: "https://food.dokbun2.com/56"
    },
    {
        id: 17,
        title: "솔트베이CC",
        url: "https://food.dokbun2.com/55"
    },
    {
        id: 18,
        title: "레인보우힐스CC",
        url: "https://food.dokbun2.com/54"
    },
    {
        id: 19,
        title: "양지파인CC",
        url: "https://food.dokbun2.com/53"
    },
    {
        id: 20,
        title: "천룡CC",
        url: "https://food.dokbun2.com/52"
    },
    {
        id: 21,
        title: "가평베네스트CC",
        url: "https://food.dokbun2.com/51"
    },
    {
        id: 22,
        title: "포천아도니스CC",
        url: "https://food.dokbun2.com/50"
    },
    {
        id: 23,
        title: "더크로스비CC",
        url: "https://food.dokbun2.com/49"
    },
    {
        id: 24,
        title: "라비에벨CC",
        url: "https://food.dokbun2.com/48"
    },
    {
        id: 25,
        title: "블랙스톤 이천CC",
        url: "https://food.dokbun2.com/47"
    },
    {
        id: 26,
        title: "파크밸리CC",
        url: "https://food.dokbun2.com/46"
    },
    {
        id: 27,
        title: "성문안CC",
        url: "https://food.dokbun2.com/45"
    },
    {
        id: 28,
        title: "중부CC",
        url: "https://food.dokbun2.com/44"
    },
    {
        id: 29,
        title: "노스팜CC",
        url: "https://food.dokbun2.com/43"
    },
    {
        id: 30,
        title: "실크밸리CC",
        url: "https://food.dokbun2.com/42"
    },
    {
        id: 31,
        title: "서서울CC",
        url: "https://food.dokbun2.com/41"
    },
    {
        id: 32,
        title: "벨라45CC",
        url: "https://food.dokbun2.com/40"
    },
    {
        id: 33,
        title: "한림광릉CC",
        url: "https://food.dokbun2.com/39"
    },
    {
        id: 34,
        title: "파주CC",
        url: "https://food.dokbun2.com/37"
    },
    {
        id: 35,
        title: "썬힐CC, 리앤리CC",
        url: "https://food.dokbun2.com/36"
    },
    {
        id: 36,
        title: "서원힐스CC",
        url: "https://food.dokbun2.com/35"
    },
    {
        id: 37,
        title: "은화삼CC",
        url: "https://food.dokbun2.com/34"
    },
    {
        id: 38,
        title: "신안CC",
        url: "https://food.dokbun2.com/33"
    },
    {
        id: 39,
        title: "비에이비스타CC",
        url: "https://food.dokbun2.com/32"
    },
    {
        id: 40,
        title: "한원CC",
        url: "https://food.dokbun2.com/31"
    },
    {
        id: 41,
        title: "양평TPC",
        url: "https://food.dokbun2.com/30"
    },
    {
        id: 42,
        title: "신라CC",
        url: "https://food.dokbun2.com/29"
    },
    {
        id: 43,
        title: "젠스필드CC",
        url: "https://food.dokbun2.com/28"
    },
    {
        id: 44,
        title: "캐슬렉스CC",
        url: "https://food.dokbun2.com/27"
    },
    {
        id: 45,
        title: "안성베네스트CC",
        url: "https://food.dokbun2.com/26"
    },
    {
        id: 46,
        title: "글렌로스CC",
        url: "https://food.dokbun2.com/25"
    },
    {
        id: 47,
        title: "스카이밸리CC",
        url: "https://food.dokbun2.com/24"
    },
    {
        id: 48,
        title: "써닝포인트CC",
        url: "https://food.dokbun2.com/23"
    },
    {
        id: 49,
        title: "이글몬트CC",
        url: "https://food.dokbun2.com/22"
    },
    {
        id: 50,
        title: "루트 52CC",
        url: "https://food.dokbun2.com/21"
    },
    {
        id: 51,
        title: "더플레이어스CC",
        url: "https://food.dokbun2.com/20"
    },
    {
        id: 52,
        title: "클럽모우CC",
        url: "https://food.dokbun2.com/19"
    },
    {
        id: 53,
        title: "샤인데일CC",
        url: "https://food.dokbun2.com/18"
    },
    {
        id: 54,
        title: "군포 안양CC",
        url: "https://food.dokbun2.com/17"
    },
    {
        id: 55,
        title: "오너스CC",
        url: "https://food.dokbun2.com/16"
    },
    {
        id: 56,
        title: "필로스CC",
        url: "https://food.dokbun2.com/15"
    },
    {
        id: 57,
        title: "비콘힐스CC",
        url: "https://food.dokbun2.com/14"
    },
    {
        id: 58,
        title: "에덴블루CC",
        url: "https://food.dokbun2.com/13"
    },
    {
        id: 59,
        title: "휘슬링락CC",
        url: "https://food.dokbun2.com/12"
    },
    {
        id: 60,
        title: "몽베르CC",
        url: "https://food.dokbun2.com/11"
    },
    {
        id: 61,
        title: "이천마이더스CC",
        url: "https://food.dokbun2.com/10"
    },
    {
        id: 62,
        title: "레이크우드CC",
        url: "https://food.dokbun2.com/9"
    },
    {
        id: 63,
        title: "베뉴지CC",
        url: "https://food.dokbun2.com/8"
    },
    {
        id: 64,
        title: "라싸CC",
        url: "https://food.dokbun2.com/7"
    },
    {
        id: 65,
        title: "금강CC",
        url: "https://food.dokbun2.com/6"
    },
    {
        id: 66,
        title: "포천힐스CC",
        url: "https://food.dokbun2.com/5"
    },
    {
        id: 67,
        title: "솔모로CC",
        url: "https://food.dokbun2.com/3"
    },
    {
        id: 68,
        title: "파가니카CC",
        url: "https://food.dokbun2.com/2"
    },
];

// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 검색 기능 설정
    setupSearch();
});

// 개별 골프장 카드 생성 함수
function createGolfCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-id', course.id);
    
    // 전체 카드를 링크로 만들어 클릭 가능하게 함
    card.innerHTML = `
        <a href="${course.url}" target="_blank" class="card-inner">
            <div class="card-content">
                <h3 class="card-title">${course.title}</h3>
            </div>
        </a>
    `;
    
    return card;
}