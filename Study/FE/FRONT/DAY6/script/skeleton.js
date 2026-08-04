const container = document.querySelector('.container');

const renderSkeletonsCard = () => {
    return `
        <div class='skeleton-card'>
            <img class='skeleton-img'>
            <div class='skeleton-body'>
                <div class='skeleton-line short'></div>
                <div class='skeleton-line title'></div>
                <div class='skeleton-line text'></div>
                <div class='skeleton-line text'></div>
            </div>
        </div>
    `;
};

const showSkeletonUI = () => {
    const skeletons = Array.from({ length: 6 }, renderSkeletonsCard).join('');
    container.innerHTML = skeletons;
};

const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const renderCard = (item) => {
    return `
        <div class='card'> 
            <img class='card-img' src='${item.image}' alt='${item.title}'>
            <div class='card-body'>
                ${item.tag ? `<span class='card-tag'>${item.tag}</span>` : ''}
                <h3 class='card-title'>${item.title}</h3>
                <p class='card-desc'>${item.description}</p>
                <div class='card-price'>${item.price}원</div>
            </div>
        </div>
    `;
};

const renderCards = (items) => {
    console.log(`debug >>>> renderCards call`);
    console.log(`debug >>>> container`, container);
    container.innerHTML = items.map(renderCard).join("");
};

const loadData = async () => {
    console.log(`1. 데이터 로드 시 스켈레톤 UI를 보여준다....`);
    showSkeletonUI();

    try {
        const [response] = await Promise.all([
            axios.get(`../server/data.json`),
            delay(1500),
        ]);

        console.log(`debug >>>> data`, response.data);
        renderCards(response.data);
    } catch (error) {
        console.error("데이터를 불러오는 중 에러 발생:", error);
    }
};

loadData();
