<template>
  <span>
    <uni-store-set
        mode="init"
        path="loc.active"
        state='{"lang": "en", "flag": "gb", "name": "English", "translation": "i18n/en.json"}'
    />

    <uni-lang-menu only>
      <uni-menu>
        <uni-button pro>
          <uni-button-icon only>
            <uni-event-store-get path="loc.active.flag" selector="uni-flag" prop="name">
              <uni-flag round/>
            </uni-event-store-get>
          </uni-button-icon>

          <uni-button-label>
            <uni-event-store-get path="loc.active.name" selector="uni-render" prop="value">
              <uni-render text/>
            </uni-event-store-get>
          </uni-button-label>

          <uni-drop-down/>
        </uni-button>

        <uni-menu-surface>
          <uni-list-wrap pro>
            <ul>
              <uni-load-repeat strict url="lang-menu.json">
                <uni-render-template hidden>
                  <uni-router-link params="lang=(( lang ))">
                    <uni-event-store-get path="loc.active.lang" equal="(( lang ))" prop="selected">
                      <uni-list-item>
                        <uni-list-item-graphic only>
                          <uni-modify action="unbind" state="(( flag ))" prop="name">
                            <uni-flag round/>
                          </uni-modify>
                        </uni-list-item-graphic>

                        <uni-list-item-text>(( name ))</uni-list-item-text>
                      </uni-list-item>
                    </uni-event-store-get>
                  </uni-router-link>

                  <uni-route params="lang=(( lang ))" prop="activate">
                    <uni-store-set inactive path="loc.active" state="(( uniself ))"/>
                  </uni-route>
                </uni-render-template>
              </uni-load-repeat>
            </ul>
          </uni-list-wrap>
        </uni-menu-surface>
      </uni-menu>
    </uni-lang-menu>

    <uni-event-store-get path="loc.active.translation" selector="uni-load-store" prop="url">
      <uni-load-store multi mode="set" path="loc.translate"/>
    </uni-event-store-get>
  </span>
</template>

<script>
export default {
  name: "UniLangMenuCustom"
}
</script>
