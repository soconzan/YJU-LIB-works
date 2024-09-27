import React from 'react';
import '../css/ResultPage.css';
import noticeI from '../images/notice-i.png';
import noticeE from '../images/notice-e.png';

// ResultPage 컴포넌트: 최종 MBTI 결과와 이에 맞는 책 추천 목록을 보여주는 역할
const ResultPage = ({mbtiResult, books, bbtiTypes, onSave, onReset}) => {
    // books 배열에서 사용자의 MBTI 결과에 맞는 책을 필터링하여 추천
    const filteredBooks = books.filter((book) => book.mbti === mbtiResult);
    const filteredBBTI = bbtiTypes.filter((bbti) => bbti.mbti === mbtiResult);
    const resultSectionClass = `result-section ${mbtiResult.startsWith('I') ? 'i-type' : 'e-type'}`;
    const noticeImage = mbtiResult.startsWith('I') ? noticeI : noticeE;
    const buttonColor = `black-btn ${mbtiResult.startsWith('I') ? 'btn-i' : 'btn-e'}`;

    return (
        <div className="result-page page">
            <div className={resultSectionClass}>
                <div className="result-top">
                    <p className="result-intro">나의 BBTI는</p>
                    {/* 사용자의 MBTI 결과를 표시 */}
                    <p className="result-title">{mbtiResult}</p>
                </div>

                {filteredBBTI.length > 0 && (
                    <p className="result-text">{filteredBBTI[0].text}<br/>아래 책을 추천해 드릴게요!</p>
                )}

                {/* 추천 책 목록을 보여주는 부분 */}
                <div className="books-section">
                    {filteredBooks.map((book) => (
                        <div className="book" key={book.title}>
                            {/* 책 표지 이미지를 클릭하면 새로운 탭에서 책 링크로 이동 */}
                            <a href={book.link} target="_blank" rel="noopener noreferrer">
                                <img src={book.image} alt={book.title}/>
                            </a>
                            <p className="book-tag">#{book.divison}</p>
                            <p className="book-title">{book.title}</p>
                        </div>
                    ))}
                </div>

                <img className="notice-img" src={noticeImage} alt="전자책 안내"/>
            </div>

            <div className="buttons-section">
                <button className={buttonColor} onClick={onSave}>이벤트 참여하기</button>
                <button className={buttonColor} onClick={onReset}>테스트 다시 하기</button>
            </div>
        </div>
    );
};

export default ResultPage;
