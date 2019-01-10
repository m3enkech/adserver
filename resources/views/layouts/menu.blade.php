<li class="{{ Request::is('home*') ? 'active' : '' }}">
    <a href="{!! route('home') !!}"><i class="fa fa-edit"></i><span>Dashboard</span></a>
</li>
<li class="{{ Request::is('clients*') ? 'active' : '' }}">
    <a href="{!! route('clients.index') !!}"><i class="fa fa-edit"></i><span>Clients</span></a>
</li>
<li class="{{ Request::is('users*') ? 'active' : '' }}">
    <a href="{!! route('users.index') !!}"><i class="fa fa-edit"></i><span>users</span></a>
</li>
<li class="treeview menu-close {{ Request::is('ads*') || Request::is('event*') ? 'active' : '' }}">
          <a href="#">
            <i class="fa fa-pie-chart"></i>
            <span>Ads & Events Management</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
<li class="{{ Request::is('ads*') ? 'active' : '' }}">
    <a href="{!! route('ads.index') !!}"><i class="fa fa-edit"></i><span>Ads</span></a>
</li>
<li class="{{ Request::is('events*') ? 'active' : '' }}">
    <a href="{!! route('events.index') !!}"><i class="fa fa-edit"></i><span>Events</span></a>
</li>
<li class="{{ Request::is('eventBuses*') ? 'active' : '' }}">
    <a href="{!! route('eventBuses.index') !!}"><i class="fa fa-edit"></i><span>Event Buses</span></a>
</li>
</ul></li>


<li class="treeview menu-close {{ Request::is('buses*') ? 'active' : '' }}">
          <a href="#">
            <i class="fa fa-pie-chart"></i>
            <span>Bus Management</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li class="{{ Request::is('buses*') ? 'active' : '' }}">
          <a href="{!! route('buses.index') !!}"><i class="fa fa-edit"></i><span>Buses</span></a>
      			</li>

            
           
          </ul>
</li>
<li class="treeview menu-close {{ Request::is(['roles*','villes*']) ? 'active' : '' }}">
          <a href="#">
            <i class="fa fa-pie-chart"></i>
            <span>User Management</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li class="{{ Request::is('roles*') ? 'active' : '' }}">
                <a href="{!! route('roles.index') !!}"><i class="fa fa-edit"></i><span>Roles</span></a>
            </li>

            <li class="{{ Request::is('villes*') ? 'active' : '' }}">
                <a href="{!! route('villes.index') !!}"><i class="fa fa-edit"></i><span>Villes</span></a>
            </li>
          </ul>
</li>



<li class="{{ Request::is('secteurs*') ? 'active' : '' }}">
    <a href="{!! route('secteurs.index') !!}"><i class="fa fa-edit"></i><span>Secteurs</span></a>
</li>

