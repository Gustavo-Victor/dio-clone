import { Link, useLocation } from "react-router-dom";
import {
  Nav,
  Group,
  Input,
  Wrapper,
  SearchInputContainer,
  UserPicture,
} from "./style";
import Button from "../Button";
import logo from "../../assets/logo-dio.png";
import { useAuth } from "../../hooks/useAuth";
//import { useEffect } from "react";

export default function Header() {
  const { pathname } = useLocation();
  const { user, logout } = useAuth();
  //const authenticated = false; 

  // useEffect(() => {
  //   console.log(pathname)
  //   if(pathname === "/feed") {
  //     authenticated == true; 
  //   }
  // }, [pathname, authenticated]);

  return (
    <Wrapper>
      <Nav>
        <Group>
          <Link to={"/"}>
            <img src={logo} alt="colored DIO logo" title="DIO Logo" />
          </Link>
          {user && JSON.stringify(user) != "{}" && (
            <>
              <SearchInputContainer>
              <Input type="text" placeholder="Search..." />
              </SearchInputContainer>
              <Link to="/feed">Love Code</Link>
              <Link to="/feed">Global</Link> 
            </>
          )}
        </Group>
        <Group>
          {user && JSON.stringify(user) != "{}" ? 
            <>
              <UserPicture src="https://avatars.githubusercontent.com/u/81335575?v=4" />
              <span>{user.name}</span>
              <Button onClick={logout}>Logout</Button>
            </>
           : 
            <>
              <Link to={"/"}>Home</Link>
              <Link to={"/login"}>
                <Button>
                  Login
                </Button>
              </Link>
              <Link to={"/register"}>
                <Button>
                  Register
                </Button>
              </Link>
            </>
          }
        </Group>
      </Nav>
      {/* <nav>
        <ul>
          <li>
            <Link to={"/"} className={pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/login"}
              className={pathname === "/login" ? "active" : ""}
            >
              Login
            </Link>
          </li>
        </ul>
      </nav> */}
    </Wrapper>
  );
}
