import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import loadable from "@loadable/component";
import AuthLayout from "./layouts/AuthLayout";
import BasicLayout from "./layouts/BasicLayout";
import BlankLayout from "./layouts/BlankLayout";

const Login = loadable(() => import("./pages/Login"));
const Home = loadable(() => import("./pages/Home"));
const ForgotPassword = loadable(() => import("./pages/Forgotpassword/index"));
const EditInformation = loadable(() => import("./pages/EditInformation/index"));
const MailForm = loadable(() => import("./pages/MailForm/index"));
const Regiter = loadable(() => import("./pages/Register/index"));
const MovieDetail = loadable(() => import("./pages/MovieDetail/index"));
const Movie = loadable(()=> import("./pages/Movies"));
const About = loadable(()=> import("./pages/About/index"))
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthLayout />}>
                    {/* <Route path="/logout" element={<Logout />} /> */}
                </Route>
                <Route element={<BasicLayout />}>
                    <Route
                        index
                        element={
                            <Suspense fallback={<CircularProgress />}>
                                <Home title="Trang Chủ" />
                            </Suspense>
                        }
                    />
                </Route>
                <Route element={<BlankLayout />}>
                    <Route
                        path="/dang-nhap"
                        element={
                            <Suspense fallback={<CircularProgress />}>
                                <Login title="Đăng nhập" />
                            </Suspense>
                        }
                    />
                </Route>
                <Route element={<BlankLayout />}>
                    <Route
                        path="/dang-ky"
                        element={
                            <Suspense fallback={<CircularProgress />}>
                                <Regiter title="Đăng ký" />
                            </Suspense>
                        }
                    />
                </Route>
                <Route element={<BlankLayout />}>
                    <Route
                        path="/forgot-password"
                        element={
                            <Suspense fallback={<CircularProgress />}>
                                <ForgotPassword title="Quên mật khẩu" />
                            </Suspense>
                        }
                    />
                </Route>
                <Route element={<BlankLayout />}>
                    <Route
                        path="/mail-form"
                        element={
                            <Suspense fallback={<CircularProgress />}>
                                <MailForm title="Biểu mẫu mail" />
                            </Suspense>
                        }
                    />
                </Route>
                <Route element={<BasicLayout />}>
                    <Route
                        path="/edit-info"
                        element={
                            <Suspense fallback={<CircularProgress />}>
                                <EditInformation title="Chỉnh sửa thông tin" />
                            </Suspense>
                        }
                    />
                </Route>
                <Route element={<BasicLayout />}>
                    <Route
                        path="/about"
                        element={
                            <Suspense fallback={<CircularProgress />}>
                                <About title="Về chúng tôi" />
                            </Suspense>
                        }
                    />
                </Route>
                <Route element={<BasicLayout />}>
                    <Route
                        path="/movie"
                        element={
                            <Suspense fallback={<CircularProgress />}>
                                <Movie title="Movie" />
                            </Suspense>
                        }
                    />
                </Route>
                <Route element={<BasicLayout />}>
                    <Route
                        path="/movie-detail"
                        element={
                            <Suspense fallback={<CircularProgress />}>
                                <MovieDetail title="Movie Detail" />
                            </Suspense>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}