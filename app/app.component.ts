import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  			<div class="wrap">
  				<div class="logo">
	  				<a href="#"><img src="../img/logo.png" alt=""/>
	  				<span class="logo-text">企业版</span>
	  				</a>
  				</div>
  				<div class="single-card">
  					<div class="card-header ng-binding">登录 </div>
  					<div class="card-body ng-scope" ng-switch-when="1">
  					  <span class="sub-title ng-scope" translate="user.ENTER_LOGIN_DOMAIN">输入你要登录的企业域名</span>
  					  <form class="form-signin w5c-form form-horizontal m-t-20 ng-pristine ng-invalid ng-invalid-required" role="form" name="formSelectDomain" w5c-form-validate="">
  					  <div class="form-group">
	  					  <div class="input-group">
	  					  <input type="text" lc-auto-focus="" name="teamDomain" required="" ng-model="vm.team.inputDomain" class="form-control ng-pristine valid ng-empty ng-invalid ng-invalid-required ng-touched" placeholder="企业域名"> 
	  					  <span class="input-group-addon ng-binding">.worktile.com</span>
	  					  </div>
  					  </div>
  					  <div class="form-group"><button type="button" w5c-form-submit="vm.checkDomain(formSelectDomain)" class="btn btn-primary btn-lg btn-block ng-scope" translate="user.NEXT">下一步</button>
  					  </div>
  					  <div class="form-group">
  					  	  <div class="col-sm-offset-6 col-sm-6 right">
  					  	       <span class="sub-title"><a href="/find" class="ng-binding">忘记企业域名?</a></span>
  					  	  </div>
  					  </div>
  					  </form>
  					  </div>
  				</div>
  				<div class="secondary-panel ng-scope" ng-if="vm.step==1">
					<div translate="user.CREATE_NEW_ENTERPRISE" class="ng-scope">如果还没有创建企业，
					<a href="/signup">点击这里</a>创建一个新的企业。
					</div>
			    </div>
  			</div>
	  `,
	  styles: [`
    	.wrap{
    	     max-width: 560px;
             margin: 6% auto;
    	}
    	.logo{
    		margin-bottom: 30px;
    		text-align: center;
    		box-sizing: border-box;
    	}
    	.logo a{
    		position: relative;
    		display: inline-block;
    		-webkit-font-smoothing: subpixel-antialiased;
    		color: #69d0d1;
    		text-decoration: none;
    		background-color: transparent;
    		box-sizing: border-box;
    	}
    	.logo img{
    		height: 54px;
    		margin-bottom: 15px;
    		border: 0;
    		vertical-align: middle;
    		box-sizing: border-box;
    	}
    	.logo .logo-text{
    		position: absolute;
		    display: inline-block;
		    right: 0;
		    bottom: 21px;
		    font-size: 15px;
		    font-weight: 700;
    	}
    	.single-card{
    		border: 1px solid #ececec;
		    background: #fff;
		    padding: 30px;
		    box-shadow: 0 0 3px #eee,inset 0 0 3px #fff;
		    box-sizing:border-box;
    	}
    	.single-card .card-header {
		    border-bottom: solid 3px #ececec;
		    padding-bottom: 10px;
		    position: relative;
		    font-size: 22px;
		    color: #4d5250;
		    letter-spacing: 2px;
		}
		.single-card .card-body {
		    border-top: solid 1px #eaeaea;
		    margin-top: 5px;
		    padding: 20px 20px 0;
		}
		.single-card .sub-title {
		    font-size: 15px;
		    display: block;
		    line-height: 180%;
		    box-sizing:border-box;
		}
		.m-t-20 {
    		margin-top: 20px;
    		box-sizing: border-box;
    	}
    	.single-card .form-group {
		    margin-left: 0;
		    margin-right: 0;
		    margin-bottom: 15px;
		}
		.form-horizontal .form-group {
		    margin: 0 0 20px;
		}
		.input-group {
		    position: relative;
		    display: table;
		    border-collapse: separate;
		    box-sizing: border-box;
		}
		.single-card .card-body input.form-control {
		    padding: 10px 15px;
		    height: 44px;
		    font-size: 15px;
		    border-bottom-right-radius: 0;
    		border-top-right-radius: 0;
    		border-collapse: separate;
		    background: #fbfbfb;
		    border-radius: 3px;
		}
		.input-group-addon:last-child {
    		border-left: 0;
        }
		.input-group-addon {
		    font-size: 14px;
		    font-weight: 400;
		    line-height: 1;
		    color: #555;
		    text-align: center;
		    border-radius: 4px;
		    border: 1px solid #f3f3f3;
		    background: #fbfbfb;
		    cursor: pointer;
		    padding: 5px 15px;
		}
		.input-group-addon, .input-group-btn {
		    width: 1%;
		    white-space: nowrap;
		    vertical-align: middle;
		    display: table-cell;
		    box-sizing: border-box;
		}
		.input-group-addon, .input-group-btn {
		    width: 1%;
		    white-space: nowrap;
		    vertical-align: middle;
		}
		.input-group-addon, .input-group-btn {
		    display: table-cell;
		}
		.form-horizontal .form-group {
		    margin: 0 0 20px;
		    box-sizing: border-box;
		}
		.single-card .form-group {
		    margin-left: 0;
		    margin-right: 0;
		    margin-bottom: 15px;
		}
		.btn {
		    border-radius: 3px;
		    font-weight: 500;
		    border: 0;
		    margin-bottom: 0;
		    text-align: center;
		    vertical-align: middle;
		    -ms-touch-action: manipulation;
		    touch-action: manipulation;
		    cursor: pointer;
		    white-space: nowrap;
		}
		.btn-block {
		    display: block;
		}
		.btn-lg {
		    padding: 10px 16px;
		    font-size: 18px;
		    line-height: 1.3333333;
		    border-radius: 6px;
		}
		.btn-primary {
		    color: #fff;
		    background-color: #69d0d1;
		    border-color: #55cacb;
		}
		.single-card .right {
		    text-align: right;
		}
		.sub-title a{
			-webkit-font-smoothing: subpixel-antialiased;
    		color: #69d0d1;
		}
    	.secondary-panel {
		    margin-top: 30px;
		    font-size: 15px;
		    box-sizing: border-box;
		}
		.secondary-panel a{
			-webkit-font-smoothing: subpixel-antialiased;
    		color: #69d0d1;
		}
  `]
})
export class AppComponent {
	
  }



