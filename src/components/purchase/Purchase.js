import React from 'react'

import './Purchase.css'


const Purchase = () => {
    return (
        <div>
            <div className = "shoe"></div>
                <div className="product">
                    <h4>남성 신발</h4>
                    <h2>나이키 에어맥스 97 OG</h2>
                    <h5>사이즈 선택</h5>
                </div>
                <div className = "box">
                    <div className ="size">
                        <button>220</button>
                        <button>230</button>
                        <button>240</button>
                        <button>250</button>
                        <button>260</button>
                        <button>270</button>
                        <button>280</button>
                        <button>290</button>
                    </div>

                    <div className = "quantity">
                        <span>수량</span>
                            
                    </div>

                    <div className = "button">
                        <button id = "now">바로구매</button>
                        <button id = "basket">장바구니</button>
                        <button id = "wish">위시리스트</button>

                    </div>
                </div>

                <div className = "explain">
                    <div className = "line"></div>
                    고객안내
                    <div className = "line"></div>
                    리뷰(671)
                    <div className = "line"></div>
                    배송
                    <div className = "line"></div>
                    분품/AS 
                    <div className = "line"></div>
                </div>

            <div className = "band">
                <img src={'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DM0028-400/19a2547a-01dc-440b-a26f-0bd471f754e6_primary.jpg?gallery'} alt='' />
                <img src={'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DM0028-400/a6313972-4e07-4e06-8d10-cd488c4d1446_2.jpg?gallery'} alt = '' />
                <img src={'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DM0028-400/569e4046-bd69-433a-b15c-f02e3fdcfe95_3.jpg?gallery'} alt = '' />
                <img src={'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DM0028-400/281c4f1f-912d-4b55-a209-c75193a531f4_4.jpg?gallery'} alt = '' />
                <img src= {'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DM0028-400/2f75184b-7c18-411e-be44-a9195d07cb85_5.jpg?gallery'} alt = '' />
                <img src= {'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DM0028-400/88d22867-c910-44ee-9439-7375d701bbfc_6.jpg?gallery' } alt = '' />
                <img src= {'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DM0028-400/4d32e4b8-2ebb-44bf-a847-d5e4df7d1393_7.jpg?gallery' } alt = '' />
                <img src= {'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DM0028-400/70730aa5-f560-4f37-9af2-6066790d278c_8.jpg?gallery' } alt = '' />
            </div>
        </div>
    )
}

export default Purchase
