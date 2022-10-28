import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <div className="fixed inset-0 top-0 z-10 flex items-center justify-between px-5 text-sm font-semibold text-gray-600 bg-white border h-14 bg-wh">
      <div className="">
        <Link href="/">로고</Link>
      </div>
      <div className="flex space-x-5">
        <div className="">메뉴1</div>
        <div className="">메뉴2</div>
        <div className="">메뉴3</div>
      </div>
      <div className="">
        <Link href="/login">로그인/회원가입</Link>
      </div>
    </div>
  );
};

export default NavBar;
