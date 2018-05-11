$().ready( function() {
$("#mc-embedded-subscribe-form").validate({
    rules: {
        EMAIL: {
            required: true,
            email: true
        },
        FNAME: {
            required: true
        },
        LNAME: {
            required: true
        },
        PHONE: {
            required: true
        },
        WORKSHOPS: {
            required: true
        },
        APPROVEMAI: {
            required: true
        }
    },
    messages: {
        EMAIL: {
            required: "שדה חובה",
            email: "אימייל לא תקין"
        },
        FNAME: {
            required: "שדה חובה",
        },
        LNAME: {
            required: "שדה חובה",
        },
        PHONE: {
            required: "שדה חובה",
        },
        WORKSHOPS: {
            required: "שדה חובה",
        },
        APPROVEMAI: {
            required: "שדה חובה",
        }
    },
    onsubmit: true,
    focusCleanup: true,
    focusInvalid: false
});


  $('#birthday').datepicker( {
        changeYear: false,
        showButtonPanel: true,
        dateFormat: 'dd/mm'
  });

  $('#marriageday').datepicker( {
        changeYear: false,
        showButtonPanel: true,
        dateFormat: 'dd/mm'
  });
});

function getDate(id, date) {
  // console.log(date.substr(0,2) + "/" + date.substr(3,2));
  if (id == "birthday") {
    $("#mce-BIRTHDAY-day").val(date.substr(0,2));
    $("#mce-BIRTHDAY-month").val(date.substr(3,2));
  }
  if (id == "marriageday") {
    $("#mce-MMERGE11-day").val(date.substr(0,2));
    $("#mce-MMERGE11-month").val(date.substr(3,2));
  }
}
