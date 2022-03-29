import "../cssFiles/registerApp.css";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div class="signup">
      <div class="formsignup">
        <form class="form" id="signup">
          <div class="form__item">
            <label for="firstname">Full Name</label>
            <input
              type="text"
              class="input"
              name="fullname"
              placeholder="John Smith"
            />
            <span class="rule firstname-rule">Only letters</span>
            <span class="error">Name cannot be blank</span>
          </div>

          <div className="form__item">
            <label for="email">Email</label>
            <input
              type="text"
              class="input"
              name="email"
              placeholder="johnsmith@email.com"
            />
            <span class="rule email-rule">Valid email</span>
            <span class="error">Email cannot be blank</span>
          </div>
          <div className="form__item">
            <label for="address">Address</label>
            <input
              type="text"
              class="input"
              name="address"
              placeholder="111 Larchmere Avenue"
            />

            <span class="error">Address cannot be blank</span>
          </div>

          <div class="form__item">
            <label for="password">Password</label>
            <input
              type="password"
              class="input"
              name="password"
              placeholder="Password"
            />
            <span class="rule capital-rule">Capital letters</span>
            <span class="rule special-rule">Special characters</span>
            <span class="rule numbers-rule">Using numbers</span>
            <span class="rule char-rule">8+ characters</span>
            <span class="error">Password cannot be blank</span>
          </div>

          <div class="form__item">
            <label for="password-check">Password Check</label>
            <input
              type="password"
              class="input"
              name="password-check"
              placeholder="Password"
            />
            <span class="rule password-check-rule">Passwords match</span>
            <span class="error">Password cannot be blank</span>
          </div>
          <p class="message">
            Already registered? <Link to="/login">Sign In</Link>
          </p>
          <input
            class="submit"
            onclick="mainSignup()"
            type="submit"
            value="SIGNUP"
          />
        </form>
      </div>

      <aside class="modal hide" id="modal"></aside>
    </div>
  );
};
