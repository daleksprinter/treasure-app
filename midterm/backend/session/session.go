package session

import(
	"net/http"

	"../model"

	"github.com/gorilla/sessions"
)

var store = sessions.NewCookieStore([]byte("secret-key"))
var sess_name = "sess"

func IsAuthenticated(r *http.Request) bool {
	sess, _ := store.Get(r, sess_name)

	auth, ok := sess.Values["authenticated"].(bool)
	return auth && ok

}

func Authenticate(w http.ResponseWriter, r *http.Request, user model.User) error {
	sess, err := store.Get(r, sess_name)
	if err != nil {
		return err
	}

	sess.Values["authenticated"] = true
	sess.Values["user"] = user.ID

	err = sess.Save(r, w)
	return err
}


func DisconnectSession(w http.ResponseWriter, r *http.Request) error {
	sess, err := store.Get(r, sess_name)
	if err != nil {
		return err
	}

	sess.Values["authenticated"] = false
	sess.Values["user"] = -1
	err = sess.Save(r, w)

	return err
}






