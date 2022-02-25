import React from "react";

const ItemsWishList = () => {
	return (
		<div className="col-lg-8">
		<div className="padding-top-2x mt-2 hidden-lg-up"></div>
		<div className="table-responsive wishlist-table margin-bottom-none">
			<table class="table">
				<thead>
					<tr>
						<th className="text-uppercase title-text"><h2>Product Name</h2></th>
						<th className="text-center"><a className="btn btn-danger btn-xl text-uppercase" href="#clear">Clear Wishlist</a></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<div className="item text">
								<a className="item-img" href="#item">
								<img src="/Items/2.jpg" alt="Item"/></a>
								<div className="item-info">
									<h4 className="title"><a href="#title">Track Set 2</a></h4>
									<div className="text-lg text-medium text-muted">$100.00</div>
									<div>Availability:
										<div className="d-inline text-info"> In Stock</div>
									</div>
								</div>
							</div>
						</td>
						<td className="text-center"></td>
					</tr>
					<tr>
						<td>
							<div className="item text">
								<a className="item-img" href="#item">
								<img src="/Items/5.jpg" alt="Item"/></a>
								<div className="item-info">
									<h4 className="title"><a href="#title">Basketball</a></h4>
									<div className="text-lg text-medium text-muted">$69.99</div>
									<div>Availability:
										<div className="d-inline text-warning"> 2 - 3 Weeks</div>
									</div>
								</div>
							</div>
						</td>
						<td className="text-center"></td>
					</tr>
					<tr>
						<td>
							<div className="item text">
								<a className="item-img" href="#item">
								<img src="Items/10.jpg" alt="Item"/></a>
								<div className="item-info">
									<h4 className="title"><a href="#title">Shoe Set 2</a></h4>
									<div className="text-lg text-medium text-muted">$50.00</div>
									<div>Availability:
										<div className="d-inline text-info"> In Stock</div>
									</div>
								</div>
							</div>
						</td>
						<td className="text-center"></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	)
}

export default ItemsWishList;
