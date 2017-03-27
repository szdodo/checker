from flask import *


app = Flask(__name__)

class Person():
    def __init__(self,email):
        self.email=email

    def email_checker(self):
        if '@' in self.email:
            return True
        else:
            return False


@app.route("/", methods=['GET','POST'])
def main():
    if request.method=='POST':
        email = request.form['email_address']
        print(email)
        person=Person(email)
        print(person.email_checker())
        return jsonify({"success": person.email_checker()})
    else:
        return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)
