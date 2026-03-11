<script src="config.js"></script>

// Firebase 및 Google API 통합 설정
const firebaseConfig = {
    apiKey: "AIzaSyAwfDOgUNPkxhIjKQ0iPDzcTNboWUyAmr0", 
    authDomain: "my-dash-b9471.firebaseapp.com",     
    databaseURL: "https://my-dash-b9471-default-rtdb.firebaseio.com", 
    projectId: "my-dash-b9471",
    storageBucket: "my-dash-b9471.appspot.com",
    // [수정] 아래 두 항목은 보통 숫자나 특정 앱 ID가 들어갑니다. 일단 비워두거나 Firebase 콘솔에서 확인하세요.
    messagingSenderId: "122143753678", 
    appId: "1:122143753678:web:7186175024b80..." 
};

// [중요] 구글 시트 내보내기용 설정
const SHEET_ID = '1Cup870CikLot8CUpNSw2i9OJngDywX6f4JmKGX2iIO4'; // 시트 주소창에서 복사한 값

// config.js에 추가
const SHEET_ID_WORK = '1sZYLkC30iQ9Z0e5vOmmUyafQdAXF_dwnQ5qJ8EJMnnw'; // work 전용 시트 ID

// [수정] 이미지(image_cc42dc.png)에서 확인한 클라이언트 ID를 여기에만 넣으세요!
const CLIENT_ID = '122143753678-8o6rb4viupv48ikhhpi1k81s7d6pmrqp.apps.googleusercontent.com'; 

// Firebase 초기화
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const database = (typeof firebase !== 'undefined') ? firebase.database() : null;


