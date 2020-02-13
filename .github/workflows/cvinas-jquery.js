<div id="errorcontainer_siwsibf9iegk4d2"></div>
<form id="form_siwsibf9iegk4d2">
    <input type="text" name="emailaddress_siwsibf9iegk4d2" />
    <input type="hidden" name="activitycode_siwsibf9iegk4d2" value="sample" /><br /><br />
	<button type="submit" name="submit_siwsibf9iegk4d2" class="submit">Submit Form</button>
</form>
<a id="closelink_siwsibf9iegk4d2" href="#" class="om-trigger-close"></a>

<script type="text/javascript">
    $('#form_siwsibf9iegk4d2').validate({
        errorClass: "invalid",
        errorLabelContainer: "#errorcontainer_siwsibf9iegk4d2",
        onsubmit: true,
        rules: {
            emailaddress_siwsibf9iegk4d2: {
                required: true,
                email: true
            }
        },
        messages: {
            emailaddress_siwsibf9iegk4d2: {
                required: "We need your email address to contact you",
                email: "Your email address must be in the format of name@domain.com"
            }
        },
        submitHandler: function(form) {
            dataString = 'hi';
            alert('hi');
            
            $.ajax({
                method: 'POST',
                url: "https://uso.trilogyforms.com/api/formsubmission"
            })
                .done(function(data) {
                    alert( "success" );
                })
                .fail(function(xhr, status, error) {
                    alert(error);
                    var msg = '<label class="invalid" for="emailaddress_siwsibf9iegk4d2">There was an error. Please try again later</label>';
                    $("#errorcontainer_siwsibf9iegk4d2").empty().append(msg).show();
                });
        }
    });
</script>
