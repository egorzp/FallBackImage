# FallBackImage
fallback image directive for angularjs

## Code example
include fallback_directive.js into your project and add <i>img-err</i> attribute with fallback image <br>
<code>
&lt;img ng-src=&quot;{{image || image_err}}&quot; img-err = &quot;{{::image_err}}&quot;&gt;
</code>


## Live example
<a href="https://codepen.io/egorzp/pen/rrQmEG">Example on codepen</a>


