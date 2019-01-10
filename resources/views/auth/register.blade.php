<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>AdServer Generator | Registration Page</title>

    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

    <!-- Bootstrap 3.3.7 -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- Ionicons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">

    <!-- Theme style -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/admin-lte/2.4.3/css/AdminLTE.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/admin-lte/2.4.3/css/skins/_all-skins.min.css">

    <!-- iCheck -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/iCheck/1.0.2/skins/square/_all.css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body class="hold-transition register-page">
<div class="register-box">
    <div class="register-logo">
        <a href="{{ url('/home') }}"><b>AdServer </b>Generator</a>
    </div>

    <div class="register-box-body">
        <p class="login-box-msg">Register a new membership</p>

        <form method="post" action="{{ url('/register') }}">

            {!! csrf_field() !!}

            <div class="form-group has-feedback{{ $errors->has('companyName') ? ' has-error' : '' }}">
                <input type="text" class="form-control" name="companyName" value="{{ old('companyName') }}" placeholder="Nom de la socièté">
                <span class="glyphicon glyphicon-user form-control-feedback"></span>

                @if ($errors->has('companyName'))
                    <span class="help-block">
                        <strong>{{ $errors->first('companyName') }}</strong>
                    </span>
                @endif
            </div>

            <div class="form-group has-feedback{{ $errors->has('managerName') ? ' has-error' : '' }}">
                <input type="text" class="form-control" name="managerName" value="{{ old('managerName') }}" placeholder="Nom du Manager">
                <span class="glyphicon glyphicon-user form-control-feedback"></span>

                @if ($errors->has('managerName'))
                    <span class="help-block">
                        <strong>{{ $errors->first('managerName') }}</strong>
                    </span>
                @endif
            </div>

            <div class="form-group has-feedback{{ $errors->has('email') ? ' has-error' : '' }}">
                <input type="email" class="form-control" name="email" value="{{ old('email') }}" placeholder="Email">
                <span class="glyphicon glyphicon-envelope form-control-feedback"></span>

                @if ($errors->has('email'))
                    <span class="help-block">
                        <strong>{{ $errors->first('email') }}</strong>
                    </span>
                @endif
            </div>

            <div class="form-group has-feedback{{ $errors->has('phoneNumber') ? ' has-error' : '' }}">
                <input type="text" class="form-control" name="phoneNumber" value="{{ old('phoneNumber') }}" placeholder="Numero Fixe">
                <span class="glyphicon glyphicon-user form-control-feedback"></span>

                @if ($errors->has('phoneNumber'))
                    <span class="help-block">
                        <strong>{{ $errors->first('phoneNumber') }}</strong>
                    </span>
                @endif
            </div>
            
            <div class="form-group has-feedback{{ $errors->has('mobileNumber') ? ' has-error' : '' }}">
                <input type="text" class="form-control" name="mobileNumber" value="{{ old('mobileNumber') }}" placeholder="Numero Mobile">
                <span class="glyphicon glyphicon-user form-control-feedback"></span>

                @if ($errors->has('mobileNumber'))
                    <span class="help-block">
                        <strong>{{ $errors->first('mobileNumber') }}</strong>
                    </span>
                @endif
            </div>
            
            <div class="form-group has-feedback{{ $errors->has('address') ? ' has-error' : '' }}">
                <input type="text" class="form-control" name="address" value="{{ old('address') }}" placeholder="Address">
                <span class="glyphicon glyphicon-user form-control-feedback"></span>

                @if ($errors->has('address'))
                    <span class="help-block">
                        <strong>{{ $errors->first('address') }}</strong>
                    </span>
                @endif
            </div>
            
            <div class="form-group has-feedback{{ $errors->has('city') ? ' has-error' : '' }}">
                <input type="text" class="form-control" name="city" value="{{ old('city') }}" placeholder="Ville">
                <span class="glyphicon glyphicon-user form-control-feedback"></span>

                @if ($errors->has('city'))
                    <span class="help-block">
                        <strong>{{ $errors->first('city') }}</strong>
                    </span>
                @endif
            </div>
            
            <div class="form-group has-feedback{{ $errors->has('accountType') ? ' has-error' : '' }}">
                <input type="text" class="form-control" name="accountType" value="{{ old('accountType') }}" placeholder="Type de Compte">
                <span class="glyphicon glyphicon-user form-control-feedback"></span>

                @if ($errors->has('accountType'))
                    <span class="help-block">
                        <strong>{{ $errors->first('accountType') }}</strong>
                    </span>
                @endif
            </div>
            
            <div class="form-group has-feedback{{ $errors->has('secteurActivite') ? ' has-error' : '' }}">
                <input type="text" class="form-control" name="secteurActivite" value="{{ old('secteurActivite') }}" placeholder="secteurActivite">
                <span class="glyphicon glyphicon-user form-control-feedback"></span>

                @if ($errors->has('secteurActivite'))
                    <span class="help-block">
                        <strong>{{ $errors->first('secteurActivite') }}</strong>
                    </span>
                @endif
            </div>
        
            <div class="form-group has-feedback{{ $errors->has('password') ? ' has-error' : '' }}">
                <input type="password" class="form-control" name="password" placeholder="Password">
                <span class="glyphicon glyphicon-lock form-control-feedback"></span>

                @if ($errors->has('password'))
                    <span class="help-block">
                        <strong>{{ $errors->first('password') }}</strong>
                    </span>
                @endif
            </div>

            <div class="form-group has-feedback{{ $errors->has('password_confirmation') ? ' has-error' : '' }}">
                <input type="password" name="password_confirmation" class="form-control" placeholder="Confirm password">
                <span class="glyphicon glyphicon-lock form-control-feedback"></span>

                @if ($errors->has('password_confirmation'))
                    <span class="help-block">
                        <strong>{{ $errors->first('password_confirmation') }}</strong>
                    </span>
                @endif
            </div>

            <div class="row">
                <div class="col-xs-8">
                    <div class="checkbox icheck">
                        <label>
                            <input type="checkbox"> I agree to the <a href="#">terms</a>
                        </label>
                    </div>
                </div>
                <!-- /.col -->
                <div class="col-xs-4">
                    <button type="submit" class="btn btn-primary btn-block btn-flat">Register</button>
                </div>
                <!-- /.col -->
            </div>
        </form>

        <a href="{{ url('/login') }}" class="text-center">I already have a membership</a>
    </div>
    <!-- /.form-box -->
</div>
<!-- /.register-box -->

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<!-- AdminLTE App -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/admin-lte/2.4.3/js/adminlte.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/iCheck/1.0.2/icheck.min.js"></script>

<script>
    $(function () {
        $('input').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue',
            increaseArea: '20%' // optional
        });
    });
</script>
</body>
</html>
