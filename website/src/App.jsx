import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import loadable from "@loadable/component";
import AuthLayout from "./layouts/AuthLayout";
import BasicLayout from "./layouts/BasicLayout";
import BlankLayout from "./layouts/LayoutNotSearch";

const Login = loadable(() => import("./pages/Auth/Login"));
const Home = loadable(() => import("./pages/Home"));
const ForgotPassword = loadable(() => import("./pages/Forgotpassword/index"));
const EditInformation = loadable(() => import("./pages/EditInformation/index"));
const MailForm = loadable(() => import("./pages/MailForm/index"));
const Regiter = loadable(() => import("./pages/Auth/Register"));
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
                                <Home title="Home Page" />
                            </Suspense>
                        }
                    />
                </Route>
                <Route element={<BlankLayout />}>
                    <Route
                        path="/login"
                        element={
                            <Suspense fallback={<CircularProgress />}>
                                <Login title="Login Page" />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <Suspense fallback={<CircularProgress />}>
                                <Regiter title="Register Page" />
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