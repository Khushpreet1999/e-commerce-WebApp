import React from "react";


const User = () => {
	return(
		<div class="col-lg-4">
		<aside class="user-info-wrapper">
			<div className="user-background">
			</div>
			<div class="user-info">
				<div class="user-avatar">
					{/* <a onClick={() => navigate('/userprofile')}></a> */}
					<img src="/images/user-avatar.png" alt="UserImage"/></div>
				<div class="user-data">
					<h4>Client Name</h4><span>Joined 2021</span>
				</div>
			</div>
		</aside>
	</div>
	)
}

export default User;