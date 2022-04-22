import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import { Link as LinkRouter } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../../favicon.ico";
import gallery04 from "../../assets/gallery04.png";

export default function Login() {
  const [savePass, setSavePass] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      email: email,
      password: password,
    });
  };

  return (
    <>
      {/* <Box
        sx={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          component="main"
          maxWidth="xs"
          sx={{ border: "2px solid gray", borderRadius: 6 }}
        >
          <CssBaseline />
          <Box
            sx={{
              my: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1 }}>
              <img src={logo} style={{ width: "100%" }} alt="logo" />
            </Avatar>
            <Typography component="h1" variant="h5">
              <p className="p__cormorant">Đăng nhập</p>
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="Mật khẩu"
                label="Mật khẩu"
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Nhớ mật khẩu"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Đăng nhập
              </Button>
              <Grid container>
                <Grid item>
                  <LinkRouter to="/register">
                    <Link variant="body2">
                      {"Chưa có tài khoản? Đăng ký ngay!"}
                    </Link>
                  </LinkRouter>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box> */}

      <div className="pt-[60px]">
        <div className=" pt-[70px] mb-[-70px] h-screen">
          <div className="w-[90%] lg:w-[80%] xl:w-[60%] h-[100%] md:h-[550px] rounded-sm md:shadow-lg shadow-gray-300 bg-white text-black mx-auto md:grid md:grid-cols-4">
            <div className="md:col-span-3  text-center pt-[5px]">
              <div className="w-[100%] sm:w-[80%] md:w-[60%] mx-auto mt-14 pb-[130px] md:px-10">
                <p className="font-bold text-xl">Chào mừng trở lại</p>
                <span className="inline-block mt-[20px] w-[40px] relative h-[40px] bg-gray-300 rounded-full">
                  <img
                    src={logo}
                    className="w-[70%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                    alt="logo"
                  />
                </span>
                <form onSubmit={handleSubmit} className="mt-8">
                  <div class="relative z-0 mb-6 w-full group">
                    <input
                      type="email"
                      id="email"
                      label="Email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      autoFocus
                    />
                    <label
                      for="floating_email"
                      class="absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email address <span className="text-red-400">*</span>
                    </label>
                  </div>
                  <div class="relative z-0 mb-6 w-full group">
                    <input
                      type="password"
                      name="Mật khẩu"
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_email"
                      class="absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Password <span className="text-red-400">*</span>
                    </label>
                  </div>
                  <div class="flex items-start mb-6">
                    <div class="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label
                        for="terms"
                        class="font-medium text-gray-900 dark:text-gray-300"
                      >
                        Nhớ mật khẩu
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    class="text-white  mt-[10px] w-full bg-[#d4b07a] hover:bg-[#ca9442] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    ĐĂNG NHẬP
                  </button>
                </form>
                <p className="md:hidden mt-[35px] text-gray-600">
                  Bạn chưa có tài khoản:{" "}
                  <LinkRouter
                    to="/register"
                    className="text-blue-400 underline hover:text-blue-600"
                  >
                    Đăng ký
                  </LinkRouter>
                </p>
              </div>
            </div>
            <div className="hidden md:block col-span-1 relative h-full overflow-hidden ">
              <div className="overflow-hidden   after:content-[''] after:absolute after:inline-block after:w-full after:h-full after:bg-black after:top-0 after:opacity-[40%]">
                <img
                  src={gallery04}
                  className=" max-w-[250%] lg:max-w-[180%] xl:max-w-[170%] translate-x-[-20%]"
                  alt=""
                />
                <div className="w-full absolute top-[10%] px-[20px] text-white z-10 text-center">
                  <span className="block font-bold text-2xl">Đăng ký mới?</span>
                  <span className="block mt-[10px] text-[15px]">
                    Đăng ký và khám phá nhiều điều tuyệt vời!
                  </span>
                </div>
                <LinkRouter
                  to="/register"
                  className="absolute text-[14px] text-white z-10 border-2 border-white hover:font-medium hover:text-gray-600  hover:bg-white   rounded-[20px] px-[15px] py-[5px] bottom-[20%] left-[50%] translate-x-[-50%]"
                >
                  ĐĂNG KÝ
                </LinkRouter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
