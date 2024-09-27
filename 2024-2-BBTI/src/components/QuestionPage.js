import React, {useEffect, useState} from 'react';
import '../css/QuestionPage.css';
import imgQ1 from '../images/question-1.png'
import imgQ2 from '../images/question-2.png';
import imgQ3 from '../images/question-3.png';
import imgQ4 from '../images/question-4.png';

export const imgQs = [imgQ1, imgQ2, imgQ3, imgQ4];

// QuestionPage 컴포넌트: 현재 질문과 답변 선택지를 보여주는 역할
const QuestionPage = ({question, options, onAnswerSelect, currentQuestionIndex, totalQuestions}) => {
    const [loadAnimation, setLoadAnimation] = useState(true);

    useEffect(() => {
        // 한번만 실행
        if (currentQuestionIndex === 0) {
            setLoadAnimation(true);
            setTimeout(() => setLoadAnimation(false), 500);
        }
    }, [currentQuestionIndex]);

    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100; // 0% 에서 100%

    return (
        <div className="question-page page">

            <div className="progress-bar-wrapper">
                {/* 진행 상태를 보여주는 게이지바 */}
                <div className="progress-bar-container">
                    <div className={`progress-bar ${loadAnimation ? 'animate' : ''}`}
                         style={{width: `${progress}%`}}></div>
                </div>
                {/*<span className="progress-text">{currentQuestionIndex + 1}/{totalQuestions}</span>*/}
            </div>

            <div className="section-question">
                <p className="question">Q{currentQuestionIndex + 1}.</p>
                <img src={imgQs[currentQuestionIndex]} alt="wiger"/>
                <p className="question">{question}</p>
            </div>

            {/* 답변 선택지들을 보여주는 부분 */}
            <div className="options">
                {options.map((option, index) => (
                    // 각 답변 선택지에 대한 버튼을 생성하고, 클릭 시 onAnswerSelect 호출
                    <button key={index} onClick={() => onAnswerSelect(option)}>
                        {option.text} {/* 답변의 텍스트를 버튼에 표시 */}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuestionPage;