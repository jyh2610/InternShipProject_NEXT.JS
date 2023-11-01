"use client";

function MainFooter() {

  return (
    <footer
      style={{
        background: "#2C2C2C",
        color: "#fff",
        padding: "24px",
        marginTop: "4rem",
      }}
    >
      <div className="max-w-[1600px] w-full mx-auto">
        <div className="flex pt-[1rem] pb-[2rem]">
          <img
            src="https://lh3.googleusercontent.com/fife/AK0iWDzMeUsxwdCXZWmrP4vqHEe-GEa_PW2-RWR6aoK9sxI9FOJfIITE7saHa07O0K8SygsJPpkbd9DNit9UDZf5e_jIF-NYSxv1pkeQNvIUGgmXwzbtHX12RcrDqQWhLkWJ7Dg7a4Hc-5C9UAWb0HQ_oTjEoMQ8HkzWDbV03hPOsya68xBRvs619CC65msEn5n0mWBNV3_x9qYYYPT95K5dpz64S0Td01bPHdmUwvofl2g8EiXpIT4gE2jNmfZHsjBfsOaQtgUtYlWT_7xnICzlFQx5oTaORNq4eVCt2Quh6b9qiYwwvPhMrw00wOxnMmCk8oln6ABvCs7ZBl2Ol7cqbMVNQsZqDDnufHX3Py2Ez9fY1_VCfShKy9ohfWw2i0prc1vw1BNrNusWBsaev4x3SovIuZXJvqMEQB2WNKxMUjUgSNB5MABAajdrIE_Km9Jc8vAxBLr4ds26v2KIYLolwSVDe66hfb4PKoj3eRo20D3U0oJFhBDh3Zq2rnOt8li0JAxXGxnDcZsawStkpMHQFus1Me5D8JnJ9yhVgHHvXDFDXyX8IJjw8pCuLqPY-JET8xhIpB9FWhav55pVDACueHO9arTA5jbdQp3ixf8d9gr69iyclBTSZdlXZ9Bflz9XqCnewczVFt_zgXyJrRiMmT3Jyxr7qO3d_Sp4Zw3A502vpGwmIPs7YPkE7rCmDeOVV0dmTN2kB3WcaeSo3SDt7gSWvFwBAFZv-QmaQrmkUpPUxU63nWIKP73aIbqEfWsFydgqlEE69eOQP__ckauGLoDFKatM7gaeGWqVFk36d_hkCxVv-Impz59xz3T8XzMrKNXtQ46bSRaqv-3H3cF48ht1yuQ-NwcgekFweJXQz6Pp37pzvORrzZlH_0eVb0VXmhCxVgQoNhmIS2tjaa4JM9vcbaOqDFwiFj_lLidFYC3LYS3dPnK1ybiV7JnuEimAKUa-qA9qHGbd=w1920-h889"
            alt="로고"
          />
        </div>
        <div className="m_footer-nav flex gap-4 md:gap-28">
          <div>
            <div className="address mb-4">
              <p className="font-bold text-base">주소</p>
              <div className="text-gray-400 text-sm leading-5">
                경기도 고양시 일산동구 중앙로 1275번길 60-30, 401-2호
                <p>유에이블코퍼레이션</p>
              </div>
            </div>
            <div className="customer mb-4">
              <p className="font-bold text-base">고객문의</p>
              <p className="text-gray-400 text-sm">010-8983-6637</p>
            </div>
            <div className="business mb-4">
              <p className="font-bold text-base">비즈니스 문의</p>
              <p className="text-gray-400 text-sm">admin@uable.co.kr</p>
            </div>
          </div>
          <div className="m_footer-nav footer-nav py-6 md:py-0 flex gap-6 md:gap-12">
            <div>
              <p className="font-bold text-base">회사소개</p>
              <div className="footer-nav-list text-gray-400 text-sm leading-8">
                <a href="#">서비스약관</a>
                <a href="#">개인정보정책</a>
              </div>
            </div>
            <div>
              <p className="font-bold text-base">제품</p>
              <div className="footer-nav-list text-gray-400 text-sm leading-8">
                <a href="#">디자인 & 랜더</a>
                <a href="#">애니메이션</a>
                <a href="#">브랜드갤러리</a>
                <a href="#">디자인 설계 시스템</a>
              </div>
            </div>
            <div>
              <p className="font-bold text-base">솔루션</p>
              <div className="footer-nav-list text-gray-400 text-sm leading-8">
                <a href="#">인테리어 디자인</a>
                <a href="#">가구 브랜드</a>
                <a href="#">제조</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto text-center w-full max-w-[1600px]">
        <hr className="border-gray-500 opacity-50" />
        <div className="py-5 text-sm">
          <p>Copyright © {new Date().getFullYear()} UABLE. All Right Reserve</p>
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;
