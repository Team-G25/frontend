export const STUDENT_KEYWORDS = {
  '': [],
  grade: [
    { value: 'grade-correction', label: '성적 정정' },
    { value: 'grade-inquiry', label: '성적 문의' },
  ],
  attendance: [
    { value: 'attendance-confirmation', label: '출석 확인' },
    { value: 'attendance-late', label: '지각' },
    { value: 'attendance-absence', label: '결석' },
  ],
  assignment: [
    { value: 'assignment-confirmation-of-submission', label: '제출 확인' },
    { value: 'assignment-Inquiry', label: '과제 문의' },
  ],
  class: [
    { value: 'class-Inquiry', label: '수강 문의' },
    { value: 'class-additional', label: '추가 수강' },
  ],
};

export const WORKER_KEYWORDS = {
  '': [],
  boss: [
    { value: 'request-vacation', label: '휴가 요청' },
    { value: 'charge-for-expenses', label: '비용 청구' },
    { value: 'business-report', label: '업무 보고' },
    { value: 'request-for-consultation', label: '상담 요청' },
  ],
  coWorker: [
    { value: 'check-work', label: '업무 확인' },
    { value: 'conference-coordination', label: '회의 조율' },
    { value: 'request-for-feedback', label: '피드백 요청' },
  ],
};

const KEYWORDS = { STUDENT_KEYWORDS, WORKER_KEYWORDS };
export default KEYWORDS;
