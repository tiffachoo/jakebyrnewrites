<template>
  <div>
    <Hero
      :title="posts && posts.length ? 'Blog' : 'Jake doesn\'t have any blogs yet'">
    </Hero>

    <section class="container">
      <ul
        v-if="posts && posts.length"
        class="content grid blog-items">
        <li
          v-for="post in posts"
          class="grid-col-50 blog-item">
          <article-preview :post="post"></article-preview>
        </li>
      </ul>
      <div v-else class="content">
        <pre style="line-height: 1; font-size: 1vw;">
                                             **   **
                                        **************  *****
                                     **$$$$  ****   $$*******
                                   * $$$$$$$$$   $$* **   *$**
                                  *  $    $$$$$* $* *$$$$$$$$$**
                                 *  $$$$$$$$$$$$$ $$$$$$$$$**$$*
                                 $$  $$$$$$$ $$$$$$$$ $$$$$$$$$$$$
                               *$ *$$$$$$$$$$$*$*$*$    *****$***
                             **$$ $$$$$$*$ **    [[[[[[[   [[[
                             **$**$$**$$$@@     [  #####  ## #
                           *$$$*****$$$$$$         ..###   ###
                           **$$$$$$$$ [[$$ ##        +++   ###
                            $$$$$$**[[  [[$$    #          ##
                              $$$***#[  #     ###      #   ##
                              $$$$$$ ##++ #+        ## ######
                              $$$$$#  ###       ##       ##
                              $$$$$#   ##            ######
                                $$$### ##      ##    #####
                                  $#$ #  +##  #   ##  ## #
                                  $$$$     #   +++#######
                                  $$*      ##############
                                  *$$# #  ++     ++++        ######
                                  $$###         ++###      ##      ++
                                  $# +#      #######+     +##+   ## ##
                                  *#+ ##     ++###+###    +  ###+     ##
                                  ## ##+#  # ++ +++++##  +  #++##       ##
                                 ##+#  ##  ++##+     ###++ ##++           #
                                ##+ +   ++  +##+  +   +######## #          #
                              ###+     ++++##          ++ # # ##+         ##
                          ####  +        ++            +++++# ## ##+        #
                     ###++   +                           ##############+ +##+##
                   ##+       ##                         ++#+ ++#########++##  "
                 ####+                                    +#+ +++###############
               ###                                       ++++++#+++++##########
              ##+                                            ++ +     ####+++++
             ##                              ++               +++        ##  ++
             ##+                  ++                         +++++ +  # # ##+++
             #      ++  +           ++                       ++@++ ++##### # ++
             #    +   ####+                                +++++++###++####+##
             #    +   ####+                                +++++++###++####+##
             #   +    ###++                               +++++######## #######
             #  +++    ####++++@                          +++++++++###   ###  #
             #+ #+      ###++++++++                            ++++++#   ##+++#
             ##+ +      #### #####++++                          ++++##    ###++
             ##++      ###########++                          ++++++#      ## +
             ###+      ##########+++                             #++#        ##
             #+  +    +########++                         ++##########
            ###+        # ###+++++                         +++++#####
           ###+  +      #  ##+++                          +++++#######
           ##++##+     ##   ##++  ##                       ###########
            ##+##+     ###  ######              #####     ###++++#####
            ##  ##     ##      ##  ######  ++              #+  ######
            ##+#       ##      ##  ######+++++             ++ #######
           ### #+    ###       ##  ########                  ## ####
           ######+    ##       ##++    ##+                  ## ## ##
          +###  ####+##       ##                            +     #+
          ##++ +  ######      ##                                  ##
          +##       ++ #     +#                 @@@                #
          +#         + #    ##                                    ##
          ## +       # #    #                                      #+
          ##+        # #    # +                                    #+
          ##+        # #    ## ###                                ###
          ##+  +     ###    ##    ####                            +##
          #++     #  ##+   +#  ########                          ####
         ##++        ##    ## ++   ####                         #####
          ##++       ++    #         +##         ##            ######
         +# +        +#   +#           +#+      #####         ######+
          # +       +#    #           +#+   ############           +##
          # +      ##    +#           +###+  ######### +###++      +#
           ##++  + #     #     #             ###   #  #######++     #
           ##++  + #     ##             +### #+#  #+####        #
           ##+    +##    ##     ##         +###++#   #++####        #
           # + +  +#     #                 +#+++# #+++###+         #
            #      #     # +++++           +#+++# #+++###++        ##
           +#      #     #    #####+        +#+++# #+++####++        #
           # ##    ###   ###++           ++##+++# #+++####          #
           ########  ##  ###              ###++## ##++##             #
             ### ##     ## ##                ###########               #
            ##+ ###      #####              #########                 #
             ##### ###     ##+               ## ## ###                 +
             ########## #  ##++             +++###++++                 +
             ########## #  #++              ++##### ++++                ++
             ++## ++  ++  ## #+               ++### #++++               +
               ########### ## #+            ++++##+++++++                +
                 ##+++  #  #### ++           ++### #+++++++              ++
                   #+####    ##++          +++##+ #####++ +             ++
                    ##### + + ### ++++      ++###  #####++ +            ++
                      ########### #++++    ++###  #####++ +             +
                       +###+ ##### ++ ++ +   +#      +# #++  +            +
                             ##############  ##       +### ++            ++
                              ####+++++###+  ##         ## ++           +++
                              #####+++#####  ##          ##+#            ++
                              ########+###++  #           ###             +
                               ###### # ## #  #           ##++            +
                                ## ## ## ## ## #           # # ##         +
                                ####  #  ++ # ##           +#  #+         +
                                ## ++       # ##            #####         ++
                                ######  #   +###             ####+         +
                                # ####      ####             #####+         +
                                 +#+ ## +#### ##               ####+++  +     #
                                   ##  #  #######               ###### ###   ##
                                  #    ##  #  ###                 ######+++   ##
                                 #########  #####                 ######+++   #
                                 ## # # ## # # #                   ## # #
                                  ##  # +  #  ##                    +## + + +
                                 # ###   #     #                     # ### #
                                 #  ###+++     #+                    ## ++  #
                                 ## #####      ##                    ## ## ####
                                 # ######       #                    ## # +  +
                                 # + + +#       #                     # + + + +
                                  # +  ##       #                     # + + + +
                                   #+ ++##     ##                      # # #+ +
                                    #+ + +     +#                      ### # +
                                    # + + +      #                      +# + +
                                    # + +  +     #                       ### ##
                                     # ###++     ##                        ## #
                                       #  #      ##                        ####
                                        # #      #+                         ###
                                         ## #   ###                          ##
                                          ## #   ##                          ##
                                           ### ## #
                                           +##  +##
                                            ##    #
                                            +#    #
                                            +#++   "
                                             ## +   #
                                             ##+     ##
                                             # #     +#
                                            #+      ###
                                             +# +    ++#
                                             ##   +   +#
                                            ## +     +##
                                           ###       #+#
                                          #+         + #
                                        ##           +##
                                        #+ # # # +#    #
                                         ##+ #  # #   ##
                                          #+##+#  ####+
        </pre>
      </div>
    </section>

  </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import Hero from '~/components/hero.vue'
import ArticlePreview from '~/components/article-preview.vue'

const client = createClient()

export default {
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      order: '-sys.createdAt'
    }).then(entries => {
      return {
        posts: entries.items
      }
    })
  },
  components: {
    ArticlePreview,
    Hero
  }
}
</script>
