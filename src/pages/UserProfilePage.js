import React from "react";
import { Button } from "react-bootstrap";

const UserProfilePage = () => { 
    return (
        <section className="user-profile">
            <div class="col-8">
                <h3 class="mb-0">My Profile</h3>
            </div>
            <div className="user-profile-container">
                <form className="border border-dark">
                    <h5 className="heading-small text-muted mb-4">User Information</h5>
                    <div classname="pl-lg-4">
                        <div className="row">
                            <div class="col-lg-6">
                                <div class="form-group focused">
                        <label class="form-control-label" for="input-first-name">First name</label>
                                    <input type="text" id="input-first-name" class="form-control form-control-alternative" value="Priyadarshana"/>                                            </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group focused">
                                    <label class="form-control-label" for="input-last-name">Last name</label>
                                    <input type="text" id="input-last-name" class="form-control form-control-alternative" value="Sarma"/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group focused">
                                    <label class="form-control-label" for="input-phonenumber">Phone Number</label>
                        <input type="text" id="input-phonenumber" class="form-control form-control-alternative" value="123456"/> 
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label class="form-control-label" for="input-email">Email address</label>
                                    <input type="email" id="input-email" class="form-control form-control-alternative" value="priya@abc.com"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5 class="heading-small text-muted mb-4">Contact Details</h5>
                    <div class="pl-lg-4">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group focused">
                                    <label class="form-control-label" for="input-address">Address</label>
                                    <input id="input-address" class="form-control form-control-alternative" value="Toronto, Ontario" type="text"/>
                                
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="form-group focused">
                                    <label class="form-control-label" for="input-city">City</label>
                                    <input type="text" id="input-city" class="form-control form-control-alternative" value="Toronto"/>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group focused">
                                    <label class="form-control-label" for="input-country">Country</label>
                                    <input type="text" id="input-country" class="form-control form-control-alternative" value="Canada"/>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label class="form-control-label" for="input-country">Postal code</label>
                                    <input type="number" id="input-postal-code" class="form-control form-control-alternative" value="Postal code"/>
                                </div>
                            </div>
                        </div> 
                    </div>
                </form>
                <Button variant="primary" type="submit" className="mb-2">
                    Save
                </Button>
            </div>         
        </section>
    )
}
export default UserProfilePage;