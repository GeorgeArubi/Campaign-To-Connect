<script type="text/javascript">
onchange="checkmessage();"

function checkmessage() {
        if (preWrittenMessage == "custom") {
            //window.alert("check");
            document.getElementById("custom_block").style.display = "block";
        } 
        else {
            document.getElementById("custom_block").style.display = "none";
	}
}

onclick="messageFunction()" 

function messageFunction() {
        var preWrittenMessage = document.getElementById("selected_message").value;
        var customMessage = document.getElementById("custom_shakushaku").value;
        var output = document.getElementById("message_shakushaku").value;

        if (preWrittenMessage == "custom") {
            output = customMessage;
        } 
        else {
            output = preWrittenMessage;
        }
       window.alert(output);
</script>
