import { Suspense } from 'preact/compat'
import { Switch, Route} from 'wouter-preact';
import Header from 'components/Header'
import Main from 'pages/main'

export default function () {

  return (
    <div className="container mx-auto" >
      <Suspense fallback={<p>Loading...</p>}>
        <Header />
        <Switch>
           <Route path="/" component={Main} />
        </Switch>
      </Suspense>
    </div>
  )
}


