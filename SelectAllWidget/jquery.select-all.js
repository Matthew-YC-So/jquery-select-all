(function ($) {
    $.widget("sforce.selectall", {
        options: {
            checkboxSelector: null
        },
        _create: function () {
            var target = this.element;
            var $checkboxes = this.options.checkboxSelector !== null ?
                $(this.options.checkboxSelector) :
                $(this.element).closest('div, p, td, body').find(':checkbox');
            target
                .addClass("select-all")
                .on('change.select-all.sforce', function () {
                $checkboxes.not(target)
                    .prop('checked', target.prop('checked'))
                    .trigger('change');
            });
            //uncheck "select-all" if any checkbox unchecked
            $checkboxes.on('change.select-all.sforce', function () {
                if (!$(this).is(target) && !$(this).prop('checked'))
                    target.prop('checked', false);
            });
        },
        _destroy: function () {
            this.element
                .removeClass("select-all")
                .off('select-all.sforce');
        }
    });
})(jQuery);
//# sourceMappingURL=jquery.select-all.js.map