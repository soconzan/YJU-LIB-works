import React, {useState} from 'react';
import '../css/Modal.css';


// Modal 컴포넌트: 학번 입력을 받아 제출 또는 모달 창을 닫는 역할
const Modal = ({onSubmit, onClose}) => {
    // 학번을 저장하는 상태
    const [studentId, setStudentId] = useState('');

    // 제출 버튼 클릭 시 호출되는 함수
    const handleSubmit = () => {
        // 입력된 학번을 onSubmit 함수에 전달
        onSubmit(studentId);
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <p className="modal-title">이벤트 참여하기</p>
                {/* 사용자가 학번을 입력할 수 있는 입력 필드 */}
                <input
                    type="text"
                    value={studentId} // 학번 상태가 입력 필드에 반영됨
                    onChange={(e) => setStudentId(e.target.value)} // 입력이 변경될 때 학번 상태 업데이트
                    placeholder="학번을 입력해주세요"
                />
                <div className="modal-buttons">
                    {/* 제출하기 버튼: handleSubmit 함수 호출 */}
                    <button className="modal-btn" onClick={handleSubmit}>제출하기</button>
                    {/* 닫기 버튼: 모달을 닫기 위한 onClose 함수 호출 */}
                    <button className="modal-btn" onClick={onClose}>닫기</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;