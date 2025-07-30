// EmailJS 초기화
(function() {
    emailjs.init("GOGAKbWy6UaHH4dxK"); // 여기에 실제 Public Key를 입력하세요
})();

jQuery(document).ready(function($) {
  "use strict";

  //Contact Form with EmailJS
  $('form.contactForm').submit(function(e) {
    e.preventDefault(); // 기본 form 제출 막기
    
    var f = $(this).find('.form-group'),
        ferror = false,
        emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

    // 입력 필드 검증
    f.children('input').each(function() {
      var i = $(this);
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false;
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;

          case 'email':
            if (!emailExp.test(i.val())) {
              ferror = ierror = true;
            }
            break;

          case 'checked':
            if (!i.is(':checked')) {
              ferror = ierror = true;
            }
            break;

          case 'regexp':
            exp = new RegExp(exp);
            if (!exp.test(i.val())) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });

    // textarea 검증
    f.children('textarea').each(function() {
      var i = $(this);
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false;
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });

    // 검증 실패시 전송 중단
    if (ferror) return false;

    // EmailJS로 이메일 전송
    var form = this;
    
    // 로딩 표시
    $('#sendmessage').removeClass('show');
    $('#errormessage').removeClass('show');
    
    emailjs.sendForm('service_9qzrs8c', 'template_g7gcob8', form)
      .then(function() {
        // 성공
        $("#sendmessage").addClass("show");
        $("#errormessage").removeClass("show");
        $('.contactForm').find("input, textarea").val("");
        console.log('이메일 전송 성공!');
      }, function(error) {
        // 실패
        $("#sendmessage").removeClass("show");
        $("#errormessage").addClass("show");
        $('#errormessage').html('이메일 전송에 실패했습니다. 다시 시도해주세요.');
        console.log('이메일 전송 실패:', error);
      });

    return false;
  });
});
