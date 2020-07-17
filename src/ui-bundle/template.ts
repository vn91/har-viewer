export const template = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View HAR {TITLE} </title>
    <link rel="stylesheet" href="./css/bootstrap.min.css" />
    <link rel="stylesheet" href="./css/har.css" />
    <script src="./js/split.min.js"></script>
</head>

<body>
    <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand">{{FILE_NAME}}</a>
    </nav>
    <div class="container-fluid">
        <div class="flex">
            <div class="remotecalls shadow" id="one">
                <div class="list-group">
                    {{REMOTE_CALL_CONTENT}}
                </div>
            </div>
            <div class="rcdetails shadow" id="two">
                <div class="list-group list-group-horizontal" id="myList" role="tablist">
                    <a class="list-group-item list-group-item-action active" data-toggle="list" href="#home"
                        role="tab">Request</a>
                    <a class="list-group-item list-group-item-action" data-toggle="list" href="#profile"
                        role="tab">Response</a>
                </div>
                <!-- Tab panes -->
                <div class="tab-content">

                    <div class="tab-pane active" id="home" role="tabpanel">
                        {{REQUEST_CONTENT}}
                    </div>

                    <div class="tab-pane" id="profile" role="tabpanel">
                        {{REQUEST_CONTENT}}
                    </div>
                </div>
            </div>
        </div>
    </div>



    <script src="./js/jquery-3.5.1.slim.min.js"></script>
    <script src="./js/bootstrap.bundle.min.js"></script>
    <script src="./js/har.js"></script>
</body>

</html>`;