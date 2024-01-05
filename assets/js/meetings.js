<!-- Mustache template for city list for dropdown   -->
  <script id="locations-template" type="text/template">
    <option value="Filter by city ">Filter by city</option>
    {{#locations}}
    <option value="{{city}}">{{city}} </option>
    {{/locations}}
  </script>

<!-- Mustache template for country list for dropdown   -->
  <script id="country-template" type="text/template">
    <option value="Filter by country ">Filter by country</option>
    {{#country}}
    <option value="{{code}}">{{name}} </option>
    {{/country}}
  </script>


<!-- Mustache template for dates list -->
    <script id="dates-template" type="text/template">
    <option value="Filter by year ">Filter by year</option>
      {{#.}}
        <option value="{{.}}">
          <li>
              {{.}}
          </li>
          </option>

      {{/.}}
    </script>

    

<!-- Mustache template for UNSD work area list -->
<script id="unsd-work-areas-template" type="text/template">
<option value="Filter by Work Area ">Filter by Work Area</option>
    {{#unsd-work-areas}}
      <option value="{{code}}">{{name}} </option>
    {{/unsd-work-areas}}
</script>

<!-- Mustache template for UNSD branches -->
<script id="unsd-branches-template" type="text/template">
<option value="Filter by UNSD Branch ">Filter by UNSD Branch</option>
    {{#unsd-branches}}
      <option value="{{code}}">{{name}} </option>
    {{/unsd-branches}}
</script>

<!-- Mustache template for topics list -->
<script id="topics-template" type="text/template">
    <option value="Filter by topic">Filter by topic</option>
    {{#topics}}
    <option value="{{code}}">{{name}} </option>
    {{/topics}}
</script>

<!-- Mustache template for types list -->
<script id="types-template" type="text/template">
    <option value="Filter by type of event">Filter by type of event</option>
    {{#types}}
    <option value="{{code}}">{{name}} </option>
    {{/types}}
</script>



<!-- Mustache template for events -->
<script id="events-template" type="text/template">
  {{#events}}
  <div class="row">
      <!--<div class="col-md-2 text-center">
          <div class="month monthDateFormat">{{start}} </div>
          <div class="day dayDateFormat">{{start}} </div>
          <div class="year yearDateFormat">{{start}} </div>
      </div> -->
      <div class="event-details">
          <h4 class="event-heading"><a href="eventsdetail.cshtml?i={{id}}"  data-toggle="modal">{{title}}</a></h4>
          <div class="event-time-location">
              <p class="text-muted"><em><i class="fa fa-calendar"></i> <span class="shortDateFormat">{{start}} </span>&mdash;<span class="shortDateFormat  end-date">{{end}} </span></em></p>
              <p class="text-muted"><span><i class="fa fa-globe"></i> {{city}}</span>
                  <spna><i class="fa fa-map-marker"></i> {{venue}}</span>
              </p>
          </div>

          <div class="event-topics">
              {{#topics}}
              <a href="eventsdetail.cshtml?t={{.}}"><button class="btn-u btn-u-xs rounded">{{.}}</button></a> {{/topics}}
          </div>
          <p class="pull-right"><a href="eventsdetail.cshtml?i={{id}}" class="data-visualisation-link" data-toggle="modal">Read more <i class="fa fa-arrow-circle-right"></i></a></p>
          <hr>
      </div>
  </div>
  {{/events}}
</script>

<script>

  $(function() {

    $.getJSON('js/events.json', function(data) {

        template = $('#events-template').html();
        var latest_events = {events: data.events.slice(0, 15)};
        var info = Mustache.to_html(template, latest_events);
        $('#events').html(info);

        /* Fill types template  */
        template = $('#types-template').html();
        items = Mustache.to_html(template, data);
        $('#types').html(items);

        /* Fill topics template  */
        template = $('#topics-template').html();
        items = Mustache.to_html(template, data);
        $('#topics').html(items);

        /* Fill cities template  */
        template = $('#locations-template').html();
        items = Mustache.to_html(template, data);
        $('#locations').html(items);

        /* Fill country template  */
        template = $('#country-template').html();
        items = Mustache.to_html(template, data);
        $('#country').html(items);

    });
  });
</script>

<!-- Change URL on dropdown change -->
  <script>
    $(function(){
        $("#locations").change(function(){
          window.location='eventsdetail.cshtml?l=' + this.value;
        });
      });

      $(function(){
        $("#types").change(function(){
          window.location='eventsdetail.cshtml?ty=' + this.value;
        });
      });

      $(function(){
        $("#topics").change(function(){
          window.location='eventsdetail.cshtml?t=' + this.value;
        });
      });

      $(function(){
        $("#dates").change(function(){
          window.location='eventsdetail.cshtml?d=' + this.value;
        });
      });

      $(function(){
        $("#country").change(function(){
          window.location='eventsdetail.cshtml?c=' + this.value;
        });
      });

  </script>
