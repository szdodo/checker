/**
 * Created by szeghi on 27.03.2017.
 */

$(document).ready(function () {
    $('#email_form').submit(function(event){ //form ID
        event.preventDefault();

        //input ID
        var email_value=$('#email_input').serialize();
        var email=$('#email_input').val();
        console.log("vmi",email_value);
        if (email.includes('@')){
            $.ajax({
                type: 'POST',
                url: '/',
                data: email_value,
                success: function(data){
                    console.log(data.success);
                    console.log("jo",data);

                },
                error: function(){
                    alert("bad");
                }
            })
        }else{
            console.log("no @");
        }
        console.log('end js');
    });

    
})