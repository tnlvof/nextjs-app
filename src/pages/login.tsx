import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";
import InputGroup from "../components/common/InputGroup";
import { useAuthState } from "../context/auth";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<any>({});
  const { authenticated } = useAuthState();

  let router = useRouter();
  if (authenticated) router.push("/");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      console.log(`${email} / ${username} / ${password}`);
      const res = await axios.post("/users", {
        email,
        username,
        password,
      });
      console.log(res);
    } catch (error: any) {
      console.log("error", error);
      setErrors(error.response?.data || {});
    }
  };

  return (
    <div className="flex justify-center w-full h-screen bg-gray-100 ">
      <div className="w-full max-w-sm p-5 text-center bg-white border rounded md:my-10">
        <div>
          <p className="text-lg font-semibold">로그인</p>
        </div>
        <div className="">
          <form onSubmit={handleSubmit}>
            <div className="py-1 text-sm font-semibold text-left text-gray-600">
              <p className="py-1 pl-1">이메일</p>
              <InputGroup
                placeholder="이메일을 입력해주세요"
                value={email}
                setValue={setEmail}
                error={undefined}
              />
            </div>

            <div className="py-1 text-sm font-semibold text-left text-gray-600">
              <p className="py-1 pl-1">비밀번호</p>
              <InputGroup
                placeholder="비밀번호를 입력해주세요"
                value={password}
                setValue={setPassword}
                error={undefined}
              />
            </div>
            <div className="px-1 mt-5 text-left">
              <input
                type="checkbox"
                id="is_agree"
                className="scale-125"
                defaultChecked
              />
              <label htmlFor="is_agree" className="px-1 text-sm cursor-pointer">
                자동로그인
              </label>
            </div>
            <button className="w-full py-3 mt-3 mb-1 text-sm font-bold text-white uppercase bg-gray-400 border border-gray-400 rounded">
              로그인
            </button>
          </form>
          <small>
            <Link href="/register">
              <span className="ml-1 text-blue-500 uppercase">회원가입</span>
            </Link>
            <span className="px-3 text-black">|</span>
            <Link href="/find-password">
              <span className="text-blue-500 uppercase">비밀번호 찾기</span>
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Login;
